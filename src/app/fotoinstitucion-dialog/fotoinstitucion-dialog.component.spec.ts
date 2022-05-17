import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoinstitucionDialogComponent } from './fotoinstitucion-dialog.component';

describe('FotoinstitucionDialogComponent', () => {
  let component: FotoinstitucionDialogComponent;
  let fixture: ComponentFixture<FotoinstitucionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoinstitucionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoinstitucionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
