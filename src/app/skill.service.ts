import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) {}

  getAll() {
      return this.http.get('http://localhost:8080/ver/skill');
   }

  deleteSkill(id:number):Observable<any> {
    return this.http.delete('http://localhost:8080/delete/skill/'+id)
  }

  createSkill(skill : any) {
    return this.http.post('http://localhost:8080/new/skill/', skill)
  }

   
  
}
