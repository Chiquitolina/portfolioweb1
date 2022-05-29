import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { EducationDialogComponent } from '../education-dialog/education-dialog.component';
import { EducationService } from '../education.service';
import { Education } from '../Models/Education';
import { ProyectsDialogComponent } from '../proyects-dialog/proyects-dialog.component';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  isLogged:boolean = false;

  education = {
    id: '',
    duracion:'',
    institucion: '',
    titulo: '',
    url_certificado: '',
    url_web_institucion: '',
    urlImagen: ''
  }

  edit:any[];
  editando:boolean = false;
  
  educationsForm = FormGroup;

  educations:Education[];

  constructor(private formBuilder: FormBuilder,
              private service: EducationService,
              private serviceS:TokenService,
              public dialog: MatDialog,
              public dialogg: MatDialog) { }


  openEditDialog(info : any) {
    this.edit = info;
    this.editando = true;

    console.log(data)
            
    const dialogRef = this.dialog.open(EducationDialogComponent, {height:'460px',width:'400px', data: [this.edit, this.editando]},);
    dialogRef.afterClosed().subscribe(res => {
      
    }
      );
  }

  openDialog(info : any) {
    this.edit = info;
    this.editando = false;

    const dialogRef = this.dialog.open(EducationDialogComponent, 
      {height:'460px',width:'400px', data:[
       this.edit, this.editando]});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }
  
  deleteEducation(id:number) {
    this.service.deleteEducation(id).subscribe(data => {});
      location.reload();
    }

  ngOnInit(): void {

    this.service.getAll()
      .subscribe((res: any) => {
        this.educations = res;
        console.log(this.educations);
      }
      )

    if (this.serviceS.getToken()) {
      this.isLogged = true
    }

  }





}
