/**
 * TODO
 *   - interface
 *   - isAllSelected()
 *   - onExport()
 *   - dataTYpe
 */
// import * as FileSaver from 'file-saver';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { APIService } from '@app/core/services/API.service';

// import { jsonArrayToCsv } from '@app/shared/utils/csv';

// export interface CompoundElement {
//   _id: number;
//   common_names: string[];
//   iupac_name: string;
//   cid: number;
//   cas: string;
//   comment: string;
// }

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter = "";
  dataType = 'compound'
  isEditing = false;
  selection = new SelectionModel(true, []);
  dataSource = new MatTableDataSource();
  displayedColumns = ['select', 'id', 'names', 'cid', 'cas', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('updateInput') updateInput!: ElementRef;

  constructor(private service: APIService) { }

  ngOnInit(): void {
    // this.service.get()
    //   .subscribe(res => {
    //     this.dataSource.data = res;
    //     for (let i = 0; i < res.length; i++) {
    //       this.dataSource.data[i]['isEditing'] = false;
    //     }
    //   })
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

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

  //   // this.service.delete(id)
  //   //   .subscribe(res => {
  //   //     console.log(res);
  //   //   });
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

  selectDataType(event: any) {
    this.dataType = event.target.value;
  }
}
