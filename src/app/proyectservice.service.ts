import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from './Models/Proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectserviceService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Proyect[]> {
    return this.http.get<Proyect[]>('http://localhost:8080/ver/proyectos');
 }


}
