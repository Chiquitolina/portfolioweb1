import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private service: AppService) { }

  aboutme:string = '';

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(res => {
      this.aboutme = res[0].aboutme;})
  }

}
