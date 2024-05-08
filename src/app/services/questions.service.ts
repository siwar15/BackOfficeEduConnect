import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private url :string = 'http://localhost:8080/api/'

  constructor(private http:HttpClient) { }
  listeQs():Observable<any>{
    return this.http.get<any>(this.url+"questionsss")
}
supprimerQs(id:any):Observable<any>{
  return this.http.delete<any>(this.url+"questionss/"+id)
}
getQuestionTop(): Observable<any> {
  return this.http.get<any>(this.url + "questionsTop");
}
}