import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeDialogComponent } from './aboutme-dialog.component';

describe('AboutmeDialogComponent', () => {
  let component: AboutmeDialogComponent;
  let fixture: ComponentFixture<AboutmeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
