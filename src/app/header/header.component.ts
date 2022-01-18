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

  titulo:string = "Full Stack Web Developer Jr.";

  descripcion:string = "Estudiante de Licenciatura en Ciencias de la Computación en la Facultad de Ciencias Exactas, Ingeniería y Agrimensura de la Universidad Nacional de Rosario.";

  mostrarformularioperfil = false;

  mostrarformularioPerfil() {
    this.mostrarformularioperfil = true
}

  cambiosPerfil(event: Event) {
    this.nombre = (<HTMLInputElement>event.target).value   }

  cambiosPerfilLocacion(event : Event) {
    this.locacion = (<HTMLInputElement>event.target).value 
  }

  cambioTitulo(event : Event) {
    this.titulo = (<HTMLInputElement>event.target).value
  }

  cambioDescripcion(event : Event) {
    this.descripcion = (<HTMLInputElement>event.target).value
  }

  guardarCambiosPerfil() {
  if (this.nombre.length < 1) {

  } else {

    this.mostrarformularioperfil = false
  }
}

  ngOnInit(): void {
  }

}
