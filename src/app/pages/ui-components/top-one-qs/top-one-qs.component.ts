import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-top-one-qs',
  templateUrl: './top-one-qs.component.html',
  styleUrls: ['./top-one-qs.component.scss']
})
export class TopOneQsComponent {
  topQuestion: any;

  constructor(private shared:QuestionsService)
{}
ngOnInit(): void {
  this.getTopQuestion();
}

getTopQuestion(): void {
  this.shared.getQuestionTop().subscribe(
    (data) => {
      this.topQuestion = data;
    },
    (error) => {
      console.log('Erreur lors de la récupération de la question top : ', error);
    }
  );
}
}

