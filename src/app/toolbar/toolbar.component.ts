import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() inputSideNav:MatSidenav;

  public isCollapsed = true;
  mostrarBanner: boolean = true;

  changesidebarState() {

  }

  hideBanner() {
  this.mostrarBanner = false
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {


    
  }

  
  login() {
    const dialogRef = this.dialog.open(LoginComponent, 
      {height:'500px',width:'400px', data:[
       ]});
    dialogRef.afterClosed().subscribe(res => {
      
    }
   );
  }

}
