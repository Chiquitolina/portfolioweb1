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
      return this.http.get<Skill[]>('https://enigmatic-castle-22417.herokuapp.com/ver/skill');
   }

  getOne(id:number): Observable<Skill> {
    return this.http.get<Skill>('https://enigmatic-castle-22417.herokuapp.com/ver/skill/'+id)
  }

  deleteSkill(id:number):Observable<any> {
    return this.http.delete('https://enigmatic-castle-22417.herokuapp.com/delete/skill/'+id)
  }

  createSkill(skill : any):Observable<any> {
    return this.http.post('https://enigmatic-castle-22417.herokuapp.com/new/skill/', skill)
  }


  updateSkill(id:number, skill: Skill): Observable<any> {
    return this.http.put('https://enigmatic-castle-22417.herokuapp.com/update/skill/'+id, skill)

  }
}
