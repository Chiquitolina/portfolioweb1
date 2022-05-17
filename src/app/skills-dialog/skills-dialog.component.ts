import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../Models/Skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.css']
})
export class SkillsDialogComponent implements OnInit {


  saveSkill() {
    if (this.data[1] == false) {
    this.service.createSkill(this.skillsForm.value)
    .subscribe(data=> {} 
      ) } else {
        this.service.updateSkill(this.data[0].id ,this.skillsForm.value)
        .subscribe(data=> {
        })
        console.log(this.skillsForm.value)      
          }
    this.data[2] = true;
    location.reload();
  }

  skillsPersona:any [] = [];
  skillsForm !: FormGroup;

  constructor(
        private formBuilder: FormBuilder,
        private service:SkillService,
        private activatedRoute: ActivatedRoute,
        public dialogRef: MatDialogRef<SkillsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data[1] == true) {
    this.skillsForm = this.formBuilder.group ( {
      id: [this.data[0].id, Validators.required],
      nombre: [this.data[0].nombre, Validators.required],
      color: [this.data[0].color, Validators.required]
    }) } else { 
      this.skillsForm = this.formBuilder.group ( {
        id: ['', Validators.required],
        nombre: ['', Validators.required],
        color: ['', Validators.required]
      })
    }
    console.log(this.data);

  }

}
