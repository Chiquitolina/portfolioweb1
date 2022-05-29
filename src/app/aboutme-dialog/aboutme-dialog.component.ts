import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';

@Component({
  selector: 'app-aboutme-dialog',
  templateUrl: './aboutme-dialog.component.html',
  styleUrls: ['./aboutme-dialog.component.css']
})
export class AboutmeDialogComponent implements OnInit {

  personasForm !: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data_:any,
              private formBuilder: FormBuilder,
              private service: AppService) { }

  save() {
    this.service.update(this.data_[0][0].id ,this.personasForm.value)
    .subscribe(data=> {
    })   
    location.reload();
  }

  ngOnInit(): void {
    this.personasForm = this.formBuilder.group ( {
      id: [this.data_[0][0].id, Validators.required],
      nombre: [this.data_[0][0].nombre, Validators.required],
      segundonombre: [this.data_[0][0].segundonombre, Validators.required],
      apellido: [this.data_[0][0].apellido, Validators.required],
      ciudad: [this.data_[0][0].ciudad, Validators.required],
      provincia: [this.data_[0][0].provincia, Validators.required],
      pais: [this.data_[0][0].pais, Validators.required],
      email: [this.data_[0][0].email, Validators.required],
      titulo: [this.data_[0][0].titulo, Validators.required],
      aboutme: [this.data_[0][0].aboutme, Validators.required]
    })
    console.log(this.data_)
  }

}
