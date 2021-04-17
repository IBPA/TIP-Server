/*
  TODO:
    1. choose file button covers a long range.
 */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { APIService } from '@app/core/services/API.service';
// import { DialogComponent } from './dialog/dialog.component';

enum DataMode {
  Enzyme,
  AhR
}

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  formGroup!: FormGroup;
  // dataMode = DataMode.Enzyme;
  // finished = false;
  // message = "";

  constructor(
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private service: APIService,
    // private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      file: [null, Validators.required]
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
        this.ref.markForCheck();
      };
    }
  }

  onSubmit() {
    this.service.CreateChemical({
      cid: 123,
      other_names: ['Fake chemical']
    });
    this.service.ListChemicals()
      .then(event => {
        console.log(event);
      });
    // csv()
    //   .fromString(this.formGroup.value.file)
    //   .then(jsonArray => {
    //     console.log(jsonArray);
    //     jsonArray.forEach(json => {
    //       this.service.CreateChemical(json);
    //     })
    //   })
    // let compoundJson = csvToJson(this.formGroup.value.file);
    // let data = {
    //   count: compoundJson.length,
    //   compounds: compoundJson
    // };

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
