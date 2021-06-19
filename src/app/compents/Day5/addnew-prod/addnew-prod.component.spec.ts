import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewProdComponent } from './addnew-prod.component';

describe('AddnewProdComponent', () => {
  let component: AddnewProdComponent;
  let fixture: ComponentFixture<AddnewProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
