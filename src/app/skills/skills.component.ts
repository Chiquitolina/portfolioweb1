import { Component, OnInit } from '@angular/core';
import { animate, trigger, style, transition, state } from '@angular/animations';
import { SkillService } from '../skill.service';
import { data } from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsPersona:any [] = [];

  skillNombre:string = "";

  skillPorcentaje:number = 0;

  skillColor:string = "";

  constructor(private service: SkillService) { }
  

  deleteSkill(id:number) {
     this.service.deleteSkill(id).subscribe(data => {}

     );
  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe((res: any) => {this.skillsPersona = res;
    }
    )

    
  }

}
