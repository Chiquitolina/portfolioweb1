import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginComponent } from '../login/login.component';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  logeado: boolean = false;

  @Input() inputSideNav: MatSidenav;

  public isCollapsed = true;
  mostrarBanner: boolean = true;

  changesidebarState() {

  }

  hideBanner() {
    this.mostrarBanner = false
  }

  constructor(public dialog: MatDialog,
    private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogout(): void {
    this.tokenService.logOut()
    location.reload()
  }



login() {
  const dialogRef = this.dialog.open(LoginComponent,
    { height: '500px', width: '400px', });
  dialogRef.afterClosed().subscribe(res => {

  }
  );
}

}
