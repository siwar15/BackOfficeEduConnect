import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Message } from 'src/app/model/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent {

  room: string = ''; 
  username: any;
  messageInput: string = '';
  messageList: any[] = [];
  isConnected: boolean = false;
  socket!: Socket;
  rooms: any[] | undefined;
  error: any; 
  loading: boolean = false;
  selectedRoom: any; 
  isChatVisible: boolean = false;
  
  

  constructor(private chatService: ChatService,private router: Router) { 
    
    this.username= localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');


    this.fetchRooms();
    
  }

  timeStampConverter(time: Date): string {
    const date = new Date(time);
    const minute = date.getMinutes();
    const hour = date.getHours();
    return hour+":"+minute;
  }

  fetchRooms(): void {
   /* console.log("test fetch room")+*/
    this.chatService.findRooms().subscribe(
      (res: any) => {
        this.rooms = res;
        console.log(this.rooms);
        this.fetchMessagesByRoom(this.rooms?.at(0)?.name);
      },
      (err) => {
        console.error('Error fetching rooms:', err);
        this.error = err;
      },
      () => {
        this.loading = false; 
      }
    );
  }

  fetchMessagesByRoom(room: string): void {
    this.selectedRoom = room
    this.room = room;
  
    this.isChatVisible = true;
    if (room !== '') {
      this.loading = true;
      this.connectSocket();
      
    
      this.chatService.findMessagesByRoom(room).subscribe(
        (res: any) => {
          this.messageList = res;
        },
        (err) => {
          console.error('Error fetching messages:', err);
          this.error = err;
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

  sendMessage(): void {
    if (this.messageInput !== '') {
      if (this.isConnected) {
        this.socket.emit('send_message',  {
          content: this.messageInput,
          username: this.username,
          room: this.room,
        });
      }else {
      console.error('Socket is not connected. Cannot send message.');
    }
    
      if (this.room !== '') {
        this.addMessageToList({
          content: this.messageInput,
          user:{"email":this.username},
          room:this.room,
          createdDateTime: new Date(),
          messageType: 'CLIENT',
        });
        this.messageInput = '';
      }
    }
  }

  addMessageToList(val: any): void { 
    console.log(this.room)
    if (this.room === '') return;
    this.messageList = [...this.messageList, val];
  }

  private connectSocket(): void {
 
    this.socket = new Socket({ url: 'http://192.168.1.1:8085', options: {
      query: { room: this.room, username: this.username },
      reconnection: false
    }});
     
      this.socket.on('connect', () => {
        this.isConnected = true;
      });
     
      this.onMessageReceived((data: any) => {
        console.log("display data",data)
        // Add received message to UI
        this.addMessageToList({
          content: data.content,
          username: data.username,
          room:data.room.name,
          createdDateTime: new Date(data.createdDateTime),
          messageType: data.messageType,
        });
      });
  }
  
  onMessageReceived(callback: (data: any) => void) {
    this.socket.on('read_message', (data: any) => {
      callback(data);
     
    });
  }
 
}
