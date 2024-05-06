import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prize } from '../Modele/Prize'; // Assurez-vous d'importer correctement votre modèle Prize

@Injectable({
  providedIn: 'root'
})
export class PrizeService {
  private baseUrl = 'http://localhost:8001'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  ajouterP(prize: Prize): Observable<Prize> {
    const url = `${this.baseUrl}/ajouterP`;
    return this.http.post<Prize>(url, prize);
  }
  getAllPrizes(): Observable<any[]> {
    const url = `${this.baseUrl}/list`;
    return this.http.get<any[]>(url);
  }
  deletePrize(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
