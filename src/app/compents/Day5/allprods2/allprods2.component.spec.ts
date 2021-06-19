import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allprods2Component } from './allprods2.component';

describe('Allprods2Component', () => {
  let component: Allprods2Component;
  let fixture: ComponentFixture<Allprods2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Allprods2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Allprods2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
