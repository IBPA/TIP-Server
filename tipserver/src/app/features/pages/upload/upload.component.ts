/*
  TODO:
    1. choose file button covers a long range.
    2. Finish parser for converting csv strings to right types.
    3. Implement resolvers for checking with online databases.
 */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as csv from 'csvtojson';
// import { MatDialog } from '@angular/material/dialog';
import { APIService } from '@app/core/services/API.service';
import { ParserService } from '@app/core/services/parser.service';
import { ValidatorService } from '@app/core/services/validator.service';
// import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  formGroup!: FormGroup;
  uploadDataType = "AhR";
  // finished = false;
  // message = "";

  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private service: APIService,
    private parser: ParserService,
    private validator: ValidatorService
    // private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      file: null
    });
  }

  onFileChange(event: any) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        this.formGroup.markAsDirty();
        this.ref.markForCheck();
      };
    } else {
      this.formGroup.markAsPristine();
    }
  }

  async onSubmit() {
    csv()
      .fromString(this.formGroup.value.file)
      .then(async jsonArray => {
        if (jsonArray.length < 1) {
          throw new Error("Empty json file not allowed. In the future change \
            this to error message instead of throw!")
        }

        // Create a dummy entry for jsonArray to indicate the end of CSV.
        jsonArray.push({
          cid: 'EndOfJsonArray'
        });

        // Prepare entries for putting into the database.
        const entries = [];
        const errorMessages = [];
        let assays = [];
        let chemical: any;
        let listItems: any;
        let chemicalID: any;
        let responseValidator: any;
        let responseAPIService: any;
        // Iteration stops before the dummy entry.
        for (let i = 0; i < jsonArray.length - 1; i++) {
          // Group assays with the same chemical.
          if (this.parser.isFirstAssay(jsonArray[i])) {
            chemical = this.parser.parseChemicalJson(jsonArray[i]);
            responseValidator = await this.validator.validateChemical(
              chemical);
            if (responseValidator.status !== 200) {
              errorMessages.push({
                chemical: chemical,
                assay: null,
                responseValidator: responseValidator
              });
            }
          }
          assays.push(this.parser.parseAssayJson(
            this.uploadDataType, jsonArray[i]));

          // If next line is an assay of the new chemical, create/update the
          //   current chemical and assay data to the database. Clear chemical
          //   and assay for new chemical group.
          if (this.parser.isFirstAssay(jsonArray[i + 1])) {
            assays.forEach(async assay => {
              responseValidator = await this.validator.validateAssay(
                this.uploadDataType.toUpperCase(), assay);
              if (responseValidator.status !== 200) {
                errorMessages.push({
                  chemical: chemical,
                  assay: assay,
                  responseValidator: responseValidator
                });
              }
            })

            listItems = await this.service.ListChemicals({
              or: [{ and: [{ cid: { eq: chemical.cid } },
                           { cid: { ne: null } }] },
                   { and: [{ cas: { eq: chemical.cas } },
                           { cas: { ne: null } }] },
                   { and: [{ iupac: { eq: chemical.iupac } },
                           { iupac: { ne: null } }] }]});
            if (listItems.items.length > 1) {
              console.log("Conflict detected: Notify developers!")
              console.log(listItems.items);
            } else if (listItems.items.length === 0) {  // New chemical.
              responseAPIService = await this.service.CreateChemical(chemical);
              chemicalID = responseAPIService.id;
            } else {  // Chemical existing in the database.
              chemicalID = listItems.items[0].id;
            }
            assays.forEach(async assay => {
              assay.chemicalID = chemicalID;
              let tmp = await this.service.CreateAssay(assay);
              console.log(await this.service.GetAssay(tmp.id));
            })

            responseValidator = null;
            chemical = null;
            assays = [];
            console.log("Completed " + (i + 1) + " assays out of ", jsonArray.length - 1);
          }
        }
        if (errorMessages.length) {
          console.log(errorMessages);
        }
      })

    // this.service.postData(data)
    //   .subscribe(
    //     res => {},
    //     error => {
    //       if (error.status == 200) {
    //         this.message = "Uploaded successfully!"
    //       } else {
    //         this.message = error.error;
    //       }

    //       this.dialog.open(DialogComponent, {
    //         data: {
    //           message: this.message
    //         }
    //       })
    //     });
  }

  // downloadTemplate() {
  //   let link = document.createElement("a");
  //   link.download = "example.xlsx";
  //   link.href = "../../../../assets/example.xlsx"
  //   link.click();
  // }
}
