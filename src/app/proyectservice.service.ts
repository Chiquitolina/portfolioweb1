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

 createProject(project:any):Observable<any> {
  return this.http.post('http://localhost:8080/new/proyecto/', project)
}

deleteProject(id:number):Observable<any> {
  return this.http.delete('http://localhost:8080/delete/proyecto/'+id)
}

updateProject(id:number, project: Proyect): Observable<any> {
  return this.http.put('http://localhost:8080/update/porject/'+id, project)

}


}
