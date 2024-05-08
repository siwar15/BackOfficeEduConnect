import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';


import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MaterialModule} from "../../../material.module";
import {Question} from "../../../Modele/Question";
import {QuestionService} from "../../../services/question.service";
import {NgForOf, NgIf} from "@angular/common";
import {ThemeService}    from "../../../services/theme.service";
import {Theme} from "../../../Modele/Theme";
import {Prize} from "../../../Modele/Prize";
import {generate} from "rxjs";



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',

  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 // response: Response = {} as Response;
  question: Question = {} as Question;
  questions: Question[];
  theme: Theme = {} as Theme;
  ques: Partial<Question> = {};
  themes: Theme[] | undefined;
  correct: any = {};
  showAddForm: boolean = false;
  @ViewChild('themeSelect') themeSelectRef!: ElementRef;
  @ViewChild('levelSelect') levelSelectRef!: ElementRef;
  private idTT: number | undefined;

  constructor(private dialog: MatDialog,private themeService : ThemeService,private questionService: QuestionService) { }

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(themes => {
      this.themes = themes;
      // @ts-ignore
      this.questionService.getQuestionByTheme(this.themes.at(0).id).subscribe(data => {
        this.questions = data;
        console.log(data);
        // Shuffle questions if needed
      });

    });

  }
  handleThemeChange(event: Event) { // Use custom interface or Event
    const selectedTheme = (event.target as HTMLSelectElement).value;



    if (selectedTheme) {
      this.idTT = parseInt(selectedTheme, 10);
      this.OnThemeChange(this.idTT);

      console.log("levels :"+ this.levelSelectRef.nativeElement.value);
    } else {
      // @ts-ignore
      this.questions= undefined; // Clear levels if no theme is selected

    }
    // Disable level select based on theme selection
    this.levelSelectRef.nativeElement.disabled = !selectedTheme;

  }

  OnThemeChange(idT : number) : void
  {this.questionService.getQuestionByTheme(idT).subscribe(data => {
    this.questions = data;
    console.log(data);
    // Shuffle questions if needed
  });



  }
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm; // Inverse la valeur pour afficher ou masquer le formulaire
    if (!this.showAddForm) {
      this.resetAddForm(); // Réinitialise le formulaire si on le cache
    }
  }
  resetAddForm(): void {
    // @ts-ignore
    this.question = {}; // Réinitialise les valeurs du nouveau prix
  }
  cancelAdd(): void {
    this.toggleAddForm(); // Cache le formulaire sans ajouter de prix
  }

cancel() {
  this.dialog.closeAll();
}

  setResponse() {
   this.question.correct = this.correct;
  }
  Generate(topic:number):void {
    this.themeService.getTheme(topic).subscribe(data =>{
      this.theme = data
    this.questionService.generateQuestion(this.theme.name, 1)
  });}





  addQuestion(ques: Partial<Question>,themeId:number) {
    this.questionService.addQuestionT(ques,themeId).subscribe(question => {
      this.question = question;
      window.location.reload();
    });
  }


}
