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

 
  deleteRoom(id: any): Observable<any> {
    return this.http.delete(this.host+"message/deleteRoom"+id);
  }
  public createRoom(form:any){
    return this.http.post(this.host+"message/addRoom",form);
  }
  getRoom(id:any): Observable<any> {
    return this.http.get(this.host+"message/getById/"+id);
  }
  public updateRoom(id:any,form:any){
    console.log(id)
    console.log(form)
    return this.http.post(this.host+"message/updateRoom/"+id,form);
  }
  login(username: string): Observable<any> {
    return this.http.post<any>(`${this.host}message/finduser/${username}`,null);
  }
  
}
