import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";

import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogRef} from "@angular/material/dialog";
import {AffichercompetitionComponent} from "../affichercompetition/affichercompetition.component";
import {Competition} from "../../../Modele/Competition";
import {TypeC} from "../../../Modele/TypeC";
import {CompetService} from "../../../services/Compet.Service";


@Component({
  selector: 'app-competition-add',
  templateUrl: './competition-add.component.html',
  styleUrls: ['./competition-add.component.css']
})
export class CompetitionAddComponent  implements OnInit {
  competitionForm!: FormGroup;
  typeCValues: string[] = Object.values(TypeC);

  constructor(private competService: CompetService, private router: Router, private fb: FormBuilder,   private _snackBar: MatSnackBar,private dialogRef: MatDialogRef<AffichercompetitionComponent>
  ) { }


  ngOnInit(): void {
    this.initForm();

  }

  initForm(): void {
    this.competitionForm = this.fb.group({
      name: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
      isOnline: [false],
      location: [''],
      typeC: ['']
    });
  }

  addCompetition(): void {
    if (this.competitionForm.valid) {
      const nouvelleCompetition: Competition = this.competitionForm.value;

      console.log('Données de la compétition à envoyer :', nouvelleCompetition); // Log des données de la compétition

      this.competService.addCompetition(nouvelleCompetition).subscribe(
        (result) => {
          console.log('Compétition ajoutée avec succès', result);
          this.openSnackBar('Compétition ajoutée avec succès !', 'Fermer');
          this.dialogRef.close();
          this.router.navigate(['/competitions']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la compétition', error);
          this.openSnackBar('Erreur lors de l\'ajout de la compétition', 'Fermer');
        }
      );
    } else {
      console.error('Formulaire invalide. Veuillez remplir tous les champs obligatoires.');
      this.openSnackBar('Formulaire invalide. Veuillez remplir tous les champs obligatoires.', 'Fermer');
    }
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000, // Durée du message en millisecondes
    });
  }
}
