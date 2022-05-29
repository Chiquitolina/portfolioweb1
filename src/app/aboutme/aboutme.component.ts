import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutmeDialogComponent } from '../aboutme-dialog/aboutme-dialog.component';
import { AppService } from '../app.service';
import { Persona } from '../Models/Persona';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private service: AppService,
              public dialog: MatDialog,
              private servicee:TokenService) { }

  aboutme:string = '';

  isLogged:boolean = false;

  personasForm = FormGroup;

  personas:Persona[];
  

  openDialog() {

    const dialogRef = this.dialog.open(AboutmeDialogComponent, 
      {height:'430px',width:'400px', data:[ this.personas
      ]});
    dialogRef.afterClosed().subscribe(res => {
    }
   );
    }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(res => {
      this.aboutme = res[0].aboutme;
      this.personas = res
      
    })

    if (this.servicee.getToken()) {
      this.isLogged = true
    }
  }

}
