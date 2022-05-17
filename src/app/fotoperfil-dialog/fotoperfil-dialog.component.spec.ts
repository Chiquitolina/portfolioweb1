import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoperfilDialogComponent } from './fotoperfil-dialog.component';

describe('FotoperfilDialogComponent', () => {
  let component: FotoperfilDialogComponent;
  let fixture: ComponentFixture<FotoperfilDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoperfilDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoperfilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
