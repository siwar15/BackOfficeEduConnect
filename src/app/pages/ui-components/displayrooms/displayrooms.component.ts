import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-displayrooms',
  templateUrl: './displayrooms.component.html',
  styleUrls: ['./displayrooms.component.scss']
})
export class DisplayroomsComponent {

  public rooms: any;

  ngOnInit(): void {

    this.ongetDashboards();
   
    }
    constructor(public chatservice: ChatService, private router:Router) { }
  public ongetDashboards() {
  
    this.chatservice.findRooms()
      .subscribe(data => {
        console.log(data);
        
        this.rooms = data;
      }, err => {
        console.log(err);
      });
  }

  addRoom(){
    this.router.navigateByUrl("ui-components/addRoom");
  
  }
  onEdit(id:any){
    this.router.navigateByUrl("ui-components/editRoom/"+id);
  
  }

onDelete(id:any){
  let conf = confirm("delet!!?");
  if (conf) {
  this.chatservice.deleteRoom(id)
  .subscribe(data=>{
   
    console.log("delete room");
  }
    ,err=>{
      this.ongetDashboards();
      console.log(err);
    })
  }
}

}
