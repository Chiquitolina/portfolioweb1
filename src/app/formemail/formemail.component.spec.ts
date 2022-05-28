import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormemailComponent } from './formemail.component';

describe('FormemailComponent', () => {
  let component: FormemailComponent;
  let fixture: ComponentFixture<FormemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
