import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { Persona } from '../Models/Persona';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  datosPersona:any[] = [];

  persona:Persona[];
 
  @Input() nombres:string;
  
  personasForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data_:any) { }

  saveInfo() {
    this.service.update(this.data_[0].id ,this.personasForm.value)
    .subscribe(data=> {
    })
    console.log(this.personasForm.value)      
      }
  

  ngOnInit(): void {
    this.personasForm = this.formBuilder.group ( {
      id: [this.data_[0].id, Validators.required],
      nombre: [this.data_[0].nombre, Validators.required],
      segundonombre: [this.data_[0].segundonombre, Validators.required],
      apellido: [this.data_[0].apellido, Validators.required],
      ciudad: [this.data_[0].ciudad, Validators.required],
      provincia: [this.data_[0].provincia, Validators.required],
      pais: [this.data_[0].pais, Validators.required],
      email: [this.data_[0].email, Validators.required],
      titulo: [this.data_[0].email, Validators.required]
    })
    console.log(this.data_)
  }

}
