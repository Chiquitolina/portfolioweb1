import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Proyect } from '../Models/Proyect';
import { ProyectsDialogComponent } from '../proyects-dialog/proyects-dialog.component';
import { ProyectserviceService } from '../proyectservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Proyect[];

  project = {
    id: '',
    nombre: '',
    color: ''
  }

  edit : any[];
  editando:boolean = false;

  skiprojectForm = FormGroup;

  valorArray:number;

  constructor(private service: ProyectserviceService,
              public dialog: MatDialog) { }

  openDialog(info : any) {
    this.edit = info;
    this.editando = false;

    const dialogRef = this.dialog.open(ProyectsDialogComponent, 
      {height:'400px',width:'400px', data:[
       this.edit, this.editando]});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(res => {
      this.projects = res;
      console.log(this.projects.length)
      this.valorArray = this.projects.length;
      console.log(this.valorArray)
    })
      
  }

}
