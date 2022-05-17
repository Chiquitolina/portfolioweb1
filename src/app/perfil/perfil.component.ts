
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { animate, transition, trigger, state, style } from '@angular/animations';
import { Router } from '@angular/router'
import { AppService } from '../app.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Persona } from '../Models/Persona';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FotoperfilDialogComponent } from '../fotoperfil-dialog/fotoperfil-dialog.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {

  personasForm = FormGroup;

  editado:boolean;

personas:Persona[];

  constructor( public router: Router,
               private service: AppService,
               public dialog: MatDialog,
               public dialogdos: MatDialog,
               private formBuilder: FormBuilder
               ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {height:'640px',width:'400px', data: [this.personas, this.editado]},);
    dialogRef.afterClosed().subscribe(res => {
      
    }
      );
  }

  dialogFoto(){
    const dialogRef = this.dialog.open(FotoperfilDialogComponent, {height:'510px',width:'400px', data: ""},);
    dialogRef.afterClosed().subscribe(res => {
      
    }
      );
  }

  ngOnInit(): void {
  
    this.service.getAll()
    .subscribe(res => {
      this.personas = res;})

    
  } 
}
