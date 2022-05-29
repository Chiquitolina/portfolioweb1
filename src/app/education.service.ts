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
      return this.http.get<Education[]>('https://enigmatic-castle-22417.herokuapp.com/ver/educacion');
   }

   deleteEducation(id:number):Observable<any> {
    return this.http.delete('https://enigmatic-castle-22417.herokuapp.com/delete/educacion/'+id)
  }

  createEducation(educacion : Education) {
    return this.http.post('https://enigmatic-castle-22417.herokuapp.com/new/educacion', educacion);
  }

  update(id:number, educacion:Education): Observable<any> {
    return this.http.put('https://enigmatic-castle-22417.herokuapp.com/update/education/'+id, educacion)
  }

}
