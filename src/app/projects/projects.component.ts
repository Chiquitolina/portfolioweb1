import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Proyect } from '../Models/Proyect';
import { ProyectsDialogComponent } from '../proyects-dialog/proyects-dialog.component';
import { ProyectserviceService } from '../proyectservice.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged:boolean = false;

  projects:Proyect[];

  project = {
    id: '',
    nombre: '',
    descripcion: '',
    urlProyecto: '',
    urlImagen: ''
  }

  proyectouno:any = []

  edit : any[];
  editando:boolean = false;
  editado:boolean = false;

  projectForm = FormGroup;

  valorArray:number;

  constructor(private service: ProyectserviceService,
              private serviceS:TokenService,
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

    openEditDialog(info : any) {
      this.edit = info;
      this.editando = true;
  
      const dialogRef = this.dialog.open(ProyectsDialogComponent, 
        {height:'400px',width:'400px', data:[
         this.edit, this.editando, this.editado]});
      dialogRef.afterClosed().subscribe(res => {
      }
     );
      }

    deleteProject(id:number) {
      this.service.deleteProject(id).subscribe(data => {}
        );
        location.reload();
   
    }

  ngOnInit(): void {
    if (this.serviceS.getToken()) {
      this.isLogged = true;
    }
    this.service.getAll()
    .subscribe(res => {
      this.projects = res;
      this.proyectouno = this.projects[0]
      console.log(this.projects.length)
      this.valorArray = this.projects.length;
      console.log(this.valorArray)
    })

    
      
  }

}
