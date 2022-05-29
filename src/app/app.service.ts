import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './Models/Persona';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient ) {}

     private api = environment.apiBaseURL 

    getAll():Observable <Persona[]> {
      return this.http.get<Persona[]>('https://enigmatic-castle-22417.herokuapp.com/ver/personas');
   }

    update(id:number, persona: Persona): Observable<any> {
      return this.http.put('https://enigmatic-castle-22417.herokuapp.com/update/persona/'+id, persona)
    }

}
