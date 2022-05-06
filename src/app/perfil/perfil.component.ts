
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { animate, transition, trigger, state, style } from '@angular/animations';
import { Router } from '@angular/router'
import { AppService } from '../app.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Persona } from '../Models/Persona';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {

  personasForm = FormGroup;

personas:Persona[];

  constructor( public router: Router,
               private service: AppService,
               public dialog: MatDialog,
               private formBuilder: FormBuilder
               ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {height:'608px',width:'400px', data: this.personas},);
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
