import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../authservice.service';
import { API_CONFIG } from 'src/app/config/api.config';
import { Cliente } from 'src/app/interface/ClienteDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService implements OnInit {
  private apiUrl = `${API_CONFIG.baseUrl}/cliente`; // Use a URL da API a partir da configuração
  authToken: string | null;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.authToken = this.authService.extractAuthToken();


   }
   ngOnInit(): void {

    this.authToken = this.authService.extractAuthToken();

  }

  private getHeaders(): HttpHeaders {
    // Verifica se o token JWT foi extraído corretamente
    if (!this.authToken) {
      throw new Error('Token JWT não encontrado.');
    }

    // Cria os headers com apenas o token JWT no header Authorization
    return new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
  }


  clienteList(): Observable<Cliente[]>{
    const Headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    console.log(Headers);

    return this.http.get<Cliente[]>(`${this.apiUrl}/all`, {headers: this.getHeaders()})
  }

}
