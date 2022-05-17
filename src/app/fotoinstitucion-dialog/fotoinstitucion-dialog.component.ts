import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotoinstitucion-dialog',
  templateUrl: './fotoinstitucion-dialog.component.html',
  styleUrls: ['./fotoinstitucion-dialog.component.css']
})
export class FotoinstitucionDialogComponent implements OnInit {

  constructor() { }

  imagenes:any[] = []
  resultado:any

  cargarImagen(event:any) {
    let archivos = event.target.files
    let reader = new FileReader();

    reader.readAsDataURL(archivos[0])
    reader.onloadend = ()=> {
      console.log(reader.result)
      this.imagenes.pop()
      this.imagenes.push(reader.result)

      this.resultado = reader.result;
    }

  }

  ngOnInit(): void {
  }

}
