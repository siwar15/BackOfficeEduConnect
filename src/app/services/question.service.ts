import { Injectable } from '@angular/core';

import {generate, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Question} from "../Modele/Question";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  public addQuestion(question: Question, idLevel: number): Observable<Question> {
    return this.http.post<Question>(`http://192.168.1.164:8888/api/addQuestion/${idLevel}`, question);
  }

  public addQuestionT(question: Partial<Question>, idLevel: number): Observable<Question> {
    return this.http.post<Question>(`http://192.168.1.164:8888/api/addQuestion/${idLevel}`, question);
  }

  public getQuestions(idLevel: number): Observable<any[]> {
    return this.http.get<any[]>(`http://192.168.1.164:8888/api/getQuestions/${idLevel}`);
  }

  public getQuestionByTheme(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://192.168.1.164:8888/api/getQuestionss/${id}`);

  }

  public generateQuestion(topic: String, nb: number): Observable<any[]> {
    return this.http.get<any[]>(`http://192.168.1.164:888/generateQuestion/${topic}/${nb}`);
  }
}

