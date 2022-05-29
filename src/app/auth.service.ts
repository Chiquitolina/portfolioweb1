import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from './Models/jwt-dto';
import { LoginUsuario } from './Models/login-usuario';
import { NuevoUsuario } from './Models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://enigmatic-castle-22417.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable <any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable <JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }


}
