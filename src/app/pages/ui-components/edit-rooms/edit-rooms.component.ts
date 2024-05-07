import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-rooms',
  templateUrl: './edit-rooms.component.html',
  styleUrls: ['./edit-rooms.component.scss']
})
export class EditRoomsComponent {

  public currentroom: any;
  roomEditformGroup?: FormGroup;
  submited: boolean = false;
  constructor(public chatservice: ChatService, private router: Router, 
    private activated: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {


    this.roomEditformGroup = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });

    //@ts-ignore
    this.chatservice.getRoom(this.activated.snapshot.params.id).subscribe(
      data => {
        this.currentroom = data;
        this.roomEditformGroup?.setValue({
          name: this.currentroom.name, 
          description: this.currentroom.description 
        });
    
      }, err => {
        console.log(err)
      }
    );
  }
  updateRoom() {
    this.submited = true;
    if (this.roomEditformGroup?.invalid) return;
    //@ts-ignore
    this.chatservice.updateRoom(this.activated.snapshot.params.id, this.roomEditformGroup?.value).subscribe(
      data => {
       
        alert("room updated successfuly");
        this.router.navigateByUrl("ui-components/displayRooms");
      }, err => {
        console.log(err);
      }
    );

  }

  cancel(){
    this.router.navigateByUrl("ui-components/displayRooms");
  }

}
