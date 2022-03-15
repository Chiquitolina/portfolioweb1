import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public isCollapsed = true;
  mostrarBanner: boolean = true;

  hideBanner() {
  this.mostrarBanner = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}