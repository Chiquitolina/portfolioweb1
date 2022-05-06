import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './Models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Skill[]> {
      return this.http.get<Skill[]>('http://localhost:8080/ver/skill');
   }

  getOne(id:number): Observable<Skill> {
    return this.http.get<Skill>('http://localhost:8080/ver/skill/'+id)
  }

  deleteSkill(id:number):Observable<any> {
    return this.http.delete('http://localhost:8080/delete/skill/'+id)
  }

  createSkill(skill : any):Observable<any> {
    return this.http.post('http://localhost:8080/new/skill/', skill)
  }


  updateSkill(id:number, skill: Skill): Observable<any> {
    return this.http.put('http://localhost:8080/update/skill/'+id, skill)

  }
}
