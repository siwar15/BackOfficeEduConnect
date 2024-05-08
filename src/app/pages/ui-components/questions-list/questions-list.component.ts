import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent {
  listeQ: any; 
  constructor(private shared: QuestionsService,private router :Router) {}
  ngOnInit(): void {
    this.getallQuestions()
  }
  getallQuestions(){
    this.shared.listeQs()
      .subscribe(
        res => {
          console.log(res);
          this.listeQ = res;
        },
        err => {
          console.log(err);
        }
      ); 
  }
 
  DeleteQs(id:any){
    this.shared.supprimerQs(id).subscribe(()=>
    this.getallQuestions())
    }
}
