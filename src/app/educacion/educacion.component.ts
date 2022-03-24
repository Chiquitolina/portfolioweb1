import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educationsPersona: any[] = [];


  constructor(private service: EducationService) { }
  
  deleteEducation(id:number) {
    this.service.deleteEducation(id).subscribe(data => {}

    );}

  ngOnInit(): void {

    this.service.getAll()
      .subscribe((res: any) => {
        this.educationsPersona = res;
        console.log(this.educationsPersona);
      }

      )
  }





}
