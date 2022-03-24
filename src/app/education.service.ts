import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor( private http: HttpClient 
                
    ) { }

    getAll() {
      return this.http.get('http://localhost:8080/ver/educacion');
   }

   deleteEducation(id:number):Observable<any> {
    return this.http.delete('http://localhost:8080/delete/educacion/'+id)
  }

  createEducation(skill : any) {
    return this.http.post('http://localhost:8080/new/educacion/', skill)
  }

}
