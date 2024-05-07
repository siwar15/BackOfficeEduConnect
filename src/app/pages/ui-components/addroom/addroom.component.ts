import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.scss']
})
export class AddroomComponent {
  roomformGroup?: FormGroup;
  submited:boolean=false;
  constructor(public chatservice: ChatService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.roomformGroup = this.fb.group({
      name: ["",Validators.required],
      description: ["",Validators.required]


    });

  }



  add_Room() {
this.submited=true;
if(this.roomformGroup?.invalid)return;
    this.chatservice.createRoom(this.roomformGroup?.value)
      .subscribe(data => {
        alert(" room crated successfuly");
        this.router.navigateByUrl("ui-components/displayRooms");

      }, err => {
        console.log(err);
      });

  }


  cancel() {
    this.router.navigateByUrl("ui-components/displayRooms");
  }

}
