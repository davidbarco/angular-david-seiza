import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/auth';
  public accessToken: string = "";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    // Almacena el token en localStorage.
    localStorage.setItem('access_token', token);
  }

  getAccessToken(): string {
    return this.accessToken || localStorage.getItem('access_token') || '';
  }

  renewAccessToken(refreshToken: string): Observable<any> {
    // Realiza una solicitud al backend para renovar el token
    return this.http.post(`${this.apiUrl}/refresh-token`, refreshToken);
  }

}
