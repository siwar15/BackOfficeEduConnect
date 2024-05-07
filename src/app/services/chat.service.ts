import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public host:String="http://localhost:8082/"

  constructor(private http:HttpClient) { }
  findMessagesByRoom(room: string): Observable<any> {
    return this.http.get(this.host+"message/"+room);
  }
  
  findRooms(): Observable<any> {
    return this.http.get(this.host+"room/getAll");
  }
  findUser(username: string): Observable<any> {
    return this.http.post<any>(`${this.host}message/finduser/${username}`,null);
  }
}
