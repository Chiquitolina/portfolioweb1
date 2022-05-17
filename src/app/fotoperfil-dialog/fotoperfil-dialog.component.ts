import { Component, OnInit } from '@angular/core';
import { matDialogAnimations } from '@angular/material/dialog';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-fotoperfil-dialog',
  templateUrl: './fotoperfil-dialog.component.html',
  styleUrls: ['./fotoperfil-dialog.component.css']
})
export class FotoperfilDialogComponent implements OnInit {

  constructor(private service: StorageService) { }

  ngOnInit(): void {
  }

  imagenes:any[] = [];

  resultado:any;

  fotoCargada:boolean = false

  submit() {
    this.service.subirImagen("eeeeeee", this.resultado).then(urlImagen=> {
      console.log(urlImagen);
    
    })
    location.reload();
  }

  cargarImagen(event:any) {
    let archivos = event.target.files
    let reader = new FileReader();

    reader.readAsDataURL(archivos[0])
    reader.onloadend = ()=> {
      console.log(reader.result)
      this.fotoCargada = true
      this.imagenes.pop()
      this.imagenes.push(reader.result)

      this.resultado = reader.result;
    }

  }

}
