import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './Models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor( private http: HttpClient 
                
    ) { }

    getAll() {
      return this.http.get<Education[]>('http://localhost:8080/ver/educacion');
   }

   deleteEducation(id:number):Observable<any> {
    return this.http.delete('http://localhost:8080/delete/educacion/'+id)
  }

  createEducation(educacion : Education) {
    return this.http.post('http://localhost:8080/new/educacion', educacion);
  }

  update(id:number, educacion:Education): Observable<any> {
    return this.http.put('http://localhost:8080/update/education/'+id, educacion)
  }

}
