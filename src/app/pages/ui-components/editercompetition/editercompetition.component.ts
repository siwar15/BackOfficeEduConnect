import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CompetService} from "../../../services/Compet.Service";
import {Competition} from "../../../Modele/Competition";

@Component({
  selector: 'app-editercompetition',
  templateUrl: './editercompetition.component.html',
  styleUrls: ['./editercompetition.component.css']
})
export class EditercompetitionComponent implements OnInit {

  competitionId: number | undefined;
  competition: Competition | undefined;
  competitionForm!: FormGroup;
  editSuccessMessageVisible: boolean = false;


  competitionTypes: string[] = ['Quiz','Hackathon','Projet','Débat','Tournoi',' Défi_de_codage']; // Remplacez les valeurs par vos propres types de compétition

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private competitionService: CompetService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar ,
  ) { }

  ngOnInit(): void {
    this.competitionForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isOnline: [false],
      location: ['', Validators.required],
      typeC: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.competitionId = +params['id'];
      if (this.competitionId) {
        this.loadCompetitionDetails(this.competitionId);
      } else {
        console.error('Invalid competition ID:', this.competitionId);
      }
    });
  }



  populateForm(): void {
    if (this.competition) {
      const startDateString = new Date(this.competition.startDate).toISOString().split('T')[0];
      const endDateString = new Date(this.competition.endDate).toISOString().split('T')[0];

      this.competitionForm.patchValue({
        name: this.competition.name,
        description: this.competition.description,
        startDate: startDateString,
        endDate: endDateString,
        isOnline: this.competition.isOnline,
        location: this.competition.location,
        typeC: this.competition.typeC
      });
    }
  }

  loadCompetitionDetails(id: number): void {
    this.competitionService.getCompetitionById(id).subscribe(
      (competition: Competition) => {
        this.competition = competition;
        this.populateForm();
        console.log(competition);
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de la compétition:', error);
      }
    );
  }
  updateCompetition(): void {
    if (this.competitionForm.valid) {
      const updatedCompetition: Competition = this.competitionForm.value;

      this.competitionService.editCompetition(this.competitionId!, updatedCompetition).subscribe(
        (result) => {
          console.log('Compétition mise à jour avec succès', result);
          this._snackBar.open('Compétition éditée avec succès !', 'Fermer', {
            duration: 2000, // Durée d'affichage du message en millisecondes
          });
          this.router.navigate(['/ui-components/competition']);
          // Naviguer vers la liste des compétitions après un court délai
          setTimeout(() => {

          }, 2000);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la compétition', error);
        }
      );
    } else {
      console.error('Formulaire invalide. Veuillez remplir tous les champs obligatoires.');
    }
  }

  submitForm(): void {
    if (this.competitionForm.valid && this.competition) {
      const updatedCompetition: Competition = this.competitionForm.value;
      this.competitionService.editCompetition(this.competitionId!, updatedCompetition).subscribe(
        (result) => {
          console.log('Competition updated successfully:', result);
          this.router.navigate(['/competitions']);
        },
        (error) => {
          console.error('Error updating competition:', error);
        }
      );
    }
  }
}
