import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationService } from '../education.service';
@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.css']
})
export class EducationDialogComponent implements OnInit {

  educationsForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private service: EducationService,
              public dialogRef: MatDialogRef<EducationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }


  saveEducation() {
    if (this.data[1] == false) {
    this.service.createEducation( this.educationsForm.value)
    .subscribe(data=> {} 
      ) } else {
        this.service.update(this.data[0].id, this.educationsForm.value)
        .subscribe(data=> {
        })
        console.log(this.educationsForm.value)      
          }
  }

  

  ngOnInit(): void {
    if (this.data[1] == true) {
      this.educationsForm = this.formBuilder.group ( {
        id: [this.data[0].id, Validators.required],
        duracion: [this.data[0].duracion, Validators.required],
        institucion: [this.data[0].institucion, Validators.required],
        titulo: [this.data[0].titulo, Validators.required],
        url_certificado:[this.data[0].url_certificado, Validators.required],
        url_web_institucion:[this.data[0].urlWebInstitucion, Validators.required]
      }) } else { 
        this.educationsForm = this.formBuilder.group ( {
          id: ['', Validators.required],
        duracion: ['', Validators.required],
        institucion: ['', Validators.required],
        titulo: ['', Validators.required],
        url_certificado:['', Validators.required],
        url_web_institucion:['', Validators.required]
        })
      }
      console.log(this.data);
  }

}
