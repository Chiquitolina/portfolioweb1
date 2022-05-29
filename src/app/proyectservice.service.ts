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
    return this.http.get<Proyect[]>('https://enigmatic-castle-22417.herokuapp.com/ver/proyectos');
 }

 createProject(project:any):Observable<any> {
  return this.http.post('https://enigmatic-castle-22417.herokuapp.com/new/proyecto/', project)
}

deleteProject(id:number):Observable<any> {
  return this.http.delete('https://enigmatic-castle-22417.herokuapp.com/delete/proyecto/'+id)
}

updateProject(id:number, project: Proyect): Observable<any> {
  return this.http.put('https://enigmatic-castle-22417.herokuapp.com/update/porject/'+id, project)

}


}
