import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsDialogComponent } from './proyects-dialog.component';

describe('ProyectsDialogComponent', () => {
  let component: ProyectsDialogComponent;
  let fixture: ComponentFixture<ProyectsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
