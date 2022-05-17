import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './Models/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {}

    getAll():Observable <Persona[]> {
      return this.http.get<Persona[]>('http://localhost:8080/ver/personas');
   }

    update(id:number, persona: Persona): Observable<any> {
      return this.http.put('http://localhost:8080/update/persona/'+id, persona)
    }

}
