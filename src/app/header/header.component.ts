import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  nombre:string = "Alejandro Ignacio Godino";

  locacion:string = "Rosario, Santa Fe, Argentina";

  mostrarformularioperfil = false;

  mostrarformularioPerfil() {
    this.mostrarformularioperfil = true
}

  cambiosPerfil(event: Event) {
    this.nombre = (<HTMLInputElement>event.target).value;   }

  cambiosPerfilLocacion(event : Event) {
    this.locacion = (<HTMLInputElement>event.target).value 
  }

  guardarCambiosPerfil() {
    this.mostrarformularioperfil = false
  }

  ngOnInit(): void {
  }

}
