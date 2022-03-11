import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {

  @Input() garchStatus: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();


prueba() {
  this.newItemEvent.emit(!this.garchStatus);
}

  constructor() { }

  ngOnInit(): void {
  }

}
