import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  username: string;
  password: string; // Add this line

  constructor(private chatService: ChatService, private router: Router) {}

  login(): void {
    this.chatService.login(this.username).subscribe(
      (user) => {
        console.log(user);
       
        console.log(user);
        localStorage.setItem('username', user.email);
        this.navigateToDashboard();
      },
      (error) => {
        console.error('Error finding user:', error);
        
      }
    );
  }

  private navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
