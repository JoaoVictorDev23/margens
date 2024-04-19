import { Injectable } from '@angular/core';
import { AuthService } from './authservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Margem } from '../interface/margem';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MargemService {
  private apiUrl = `${API_CONFIG.baseUrl}/margem`; // Use a URL da API a partir da configuração


  authToken: string | null;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authToken = this.authService.extractAuthToken();

  }

  cadastrarMargem(margem:Margem): Observable<Margem>{
    if(!this.authToken){
      throw new Error ('Token JWT não encontrado, refaça o Login!');
    }
    const Headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    return this.http.post<Margem>(`${this.apiUrl}/criar`, margem, { headers: Headers } )

  }
  private getHeaders(): HttpHeaders {
    // Verifica se o token JWT foi extraído corretamente
    if (!this.authToken) {
      throw new Error('Token JWT não encontrado.');
    }

    // Cria os headers com apenas o token JWT no header Authorization
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }

  margemList(): Observable<Margem[]>{
    const Headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    console.log(Headers);

    return this.http.get<Margem[]>(`${this.apiUrl}`, {headers: this.getHeaders()})
  }
}
