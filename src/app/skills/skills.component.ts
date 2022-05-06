import { Component, OnInit } from '@angular/core';
import { animate, trigger, style, transition, state } from '@angular/animations';
import { SkillService } from '../skill.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { data } from 'jquery';
import { SkillsDialogComponent } from '../skills-dialog/skills-dialog.component';
import { Skill } from '../Models/Skill';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skill[];

  skill = {
    id: '',
    nombre: '',
    color: ''
  }

  edit : any[];
  editando:boolean = false;

  skillsForm = FormGroup;

  constructor(private service: SkillService,
              public dialog: MatDialog,
              private formBuilder: FormBuilder) { 
                
              }

  refreshParent() {
    location.reload();
  }

  openEdittDialog(info : any) {
    this.edit = info;
    this.editando = false;

    const dialogRef = this.dialog.open(SkillsDialogComponent, 
      {height:'300px',width:'400px', data:[
       this.edit, this.editando]});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }


  openEditDialog(info : any) {
    this.edit = info;
    this.editando = true;

    const dialogRef = this.dialog.open(SkillsDialogComponent, 
      {height:'300px',width:'400px', data:[
       this.edit, this.editando]});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }

  openDialog(): void {
    this.editando = false;
    const dialogRef = this.dialog.open(SkillsDialogComponent, {height:'300px',width:'400px'});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }

  deleteSkill(id:number) {
     this.service.deleteSkill(id).subscribe(data => {}
     );
     location.reload();

  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(res => {
      this.skills = res;})

    
  }

}
