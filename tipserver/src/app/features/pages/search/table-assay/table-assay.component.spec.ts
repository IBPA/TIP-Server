import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssayComponent } from './table-assay.component';

describe('TableAssayComponent', () => {
  let component: TableAssayComponent;
  let fixture: ComponentFixture<TableAssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAssayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
