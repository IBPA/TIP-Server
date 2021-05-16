/**
 * TODO
 *   - Authorized users are allowed to edit data.
 */
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from '@app/core/services/API.service';

// import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'table-chemical',
  templateUrl: './table-chemical.component.html',
  styleUrls: ['./table-chemical.component.css']
})
export class TableChemicalComponent implements OnInit {
  filter = "";
  dataSource: any = new MatTableDataSource();
  displayedColumns = ['otherNames', 'cid', 'cas', 'inchiKey', 'iupac',
                      'smiles', 'mw'];
  // isEditing = false;
  // selection = new SelectionModel(true, []);
  // displayedColumns = ['select', 'id', 'names', 'cid', 'cas', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('updateInput') updateInput!: ElementRef;

  constructor(private service: APIService) { }

  async ngOnInit() {
    let res = await this.service.ListChemicals(undefined, 5000);
    this.dataSource.data = res.items;
    // this.service.get()
    //   .subscribe(res => {
    //     this.dataSource.data = res;
    //     for (let i = 0; i < res.length; i++) {
    //       this.dataSource.data[i]['isEditing'] = false;
    //     }
    //   })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onFilter(filter: any) {
    this.dataSource.filter = this.filter;
  }

  // onEdit(row) {
  //   row.isEditing = true;
  //   this.isEditing = true;
  // }

  // onSave(row) {
  //   row.common_names = this.updateInput.nativeElement.value;
  //   row.isEditing = false;
  //   this.isEditing = false;

  //   let updatedFields = {
  //     'common_names': row.common_names
  //   };

  //   this.service.put(row._id, updatedFields)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }

  // onCancel(row) {
  //   row.isEditing = false;
  //   this.isEditing = false;
  // }

  // onDelete(row) {
  //   // If row exists in the selected, remove it from the selected.
  //   if (this.selection.selected.includes(row)) {
  //     this.selection.toggle(row);
  //   }

  //   const indexData = this.dataSource.data.indexOf(row);
  //   const id = this.dataSource.data[indexData]['_id'];
  //   this.dataSource.data.splice(indexData, 1);
  //   this.dataSource._updateChangeSubscription();
  //   this.isEditing = false;

  //   this.service.delete(id)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }

  // onExport() {
  //   const keys = ['cid', 'cas', 'common_names', 'iupac_name', 'mw',
  //                 'comment'];
  //   let blob = new Blob(
  //     [jsonArrayToCsv(this.selection.selected, keys)], { type: 'text/csv' });
  //   FileSaver.saveAs(blob, 'export.csv');
  // }

  // // TODO:
  // //    edge case, should wait until paginator initialized.
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   if (this.dataSource.paginator) {
  //     const pageSize = this.dataSource.paginator.pageSize;
  //     return numSelected === pageSize;
  //   }
  //   return false;
  // }

  // masterToggle() {
  //   this.isAllSelected() ? this.selection.clear() : this.selectRows();
  // }

  // selectRows() {
  //   for (let i = 0; i < this.dataSource.paginator.pageSize; i++) {
  //     this.selection.select(this.dataSource.data[i]);
  //   }
  // }

  // checkboxLabel(row?): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} \
  //     row${row.position + 1}`;
  // }

  // selectDataType(event) {
  //   this.dataType = event.target.value;
  // }
}
