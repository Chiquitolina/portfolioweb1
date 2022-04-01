import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor() { }

  ngOnInit(): void {


  }

}
