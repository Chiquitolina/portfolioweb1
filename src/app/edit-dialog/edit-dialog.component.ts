import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  datosPersona:any[] = [];
  
nombreAdmin:string = "";

segundonombreAdmin:string = "";

apellidoAdmin:string = "";

ciudadAdmin:string = "";

provinciaAdmin:string = "";

paisAdmin:string = "";

tituloAdmin:string = "";

emailAdmin:String = "";

  @Input() nombres:string;
  

  constructor(
    private service: AppService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe((res: any) => {
      this.datosPersona = res;
      this.nombreAdmin = this.datosPersona[0].nombre;
      this.apellidoAdmin = this.datosPersona[0].apellido;
      this.segundonombreAdmin = this.datosPersona[0].segundonombre;
      this.ciudadAdmin = this.datosPersona[0].ciudad;
      this.provinciaAdmin = this.datosPersona[0].provincia;
      this.paisAdmin = this.datosPersona[0].pais;
      this.tituloAdmin = this.datosPersona[0].titulo;
      this.emailAdmin = this.datosPersona[0].email;
    
    })
  }

}
