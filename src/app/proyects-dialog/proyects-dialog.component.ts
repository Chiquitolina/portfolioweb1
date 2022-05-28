import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProyectserviceService } from '../proyectservice.service';

@Component({
  selector: 'app-proyects-dialog',
  templateUrl: './proyects-dialog.component.html',
  styleUrls: ['./proyects-dialog.component.css']
})
export class ProyectsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: ProyectserviceService,
              private formBuilder:FormBuilder) { }

  projectForm ! : FormGroup;

  saveProject() {
    if (this.data[1] == false) {
    this.service.createProject(this.projectForm.value)
    .subscribe(data=> {} 
      ) } else {
        this.service.updateProject(this.data[0].id ,this.projectForm.value)
        .subscribe(data=> {
        })
        console.log(this.projectForm.value)      
          }
    this.data[2] = true;
    location.reload();
  }

  ngOnInit(): void {

    if (this.data[1] == true) {
      this.projectForm = this.formBuilder.group ( {
        id: [this.data[0].id, Validators.required],
        nombre: [this.data[0].nombre, Validators.required],
        descripcion: [this.data[0].descripcion, Validators.required],
        urlProyecto: [this.data[0].urlProyecto, Validators.required],
        urlImagen: [this.data[0].urlImagen, Validators.required]
      }) } else { 
        this.projectForm = this.formBuilder.group ( {
          id: ['', Validators.required],
          nombre: ['', Validators.required],
          descripcion: ['', Validators.required],
          urlProyecto: ['', Validators.required],
          urlImagen: ['', Validators.required]
        })
      }
  }

}
