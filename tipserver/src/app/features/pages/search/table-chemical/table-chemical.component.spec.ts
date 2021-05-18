import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChemicalComponent } from './table-chemical.component';

describe('TableChemicalComponent', () => {
  let component: TableChemicalComponent;
  let fixture: ComponentFixture<TableChemicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChemicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
