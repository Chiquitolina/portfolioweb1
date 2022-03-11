
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { animate, transition, trigger, state, style } from '@angular/animations';
import { Router } from '@angular/router'
import { AppService } from '../app.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {

datosPersona:any [] = []; 

nombreAdmin:string = "";

segundonombreAdmin:string = "";

apellidoAdmin:string = "";

ciudadAdmin:string = "";

provinciaAdmin:string = "";

paisAdmin:string = "";

tituloAdmin:string = "";

descripcion:string = "Estudiante de Licenciatura en Ciencias de la Computación en la Facultad de Ciencias Exactas, Ingeniería y Agrimensura de la Universidad Nacional de Rosario.";

  constructor( public router: Router,
               private service: AppService,
               public dialog: MatDialog
               ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    }
      );
  }

  ngOnInit(): void {

    this.service.getAll()
    .subscribe((res: any) => {
    this.datosPersona = res;
    this.nombreAdmin = this.datosPersona[0].nombre;
    this.apellidoAdmin = this.datosPersona[0].apellido;
    this.segundonombreAdmin = this.datosPersona[0].segundonombre;
    this.ciudadAdmin = this.datosPersona[0].ciudad;
    this.provinciaAdmin = this.datosPersona[0].provincia;
    this.paisAdmin = this.datosPersona[0].pais;
    this.tituloAdmin = this.datosPersona[0].titulo;

    });
    
  }

  

}
