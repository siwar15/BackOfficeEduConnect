import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {MatSnackBar} from "@angular/material/snack-bar";
import {BadgeService} from "../../../../services/Badge.service";


@Component({
  selector: 'app-add-badge',
  templateUrl: './add-badge.component.html',
  styleUrls: ['./add-badge.component.css']
})
export class AddBadgeComponent implements   OnInit {
  competitionId: number;
  badgeForm: FormGroup;
  competitionName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private badgeService: BadgeService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.badgeForm = this.formBuilder.group({
      competitionId: ['', Validators.required],
      competitionName: ['', Validators.required], // Champ caché pour le nom de la compétition
   // Champ pour l'ID de l'utilisateur
      description: ['', Validators.required], // Champ pour la description du badge
      name: ['', Validators.required] // Champ pour le nom du badge
    });

    this.route.params.subscribe(params => {
      const idCompet = params['idCompet'];
      if (idCompet) {
        this.competitionId = +idCompet;
        this.getCompetitionNameById(this.competitionId);
        this.badgeForm.patchValue({ competitionId: this.competitionId });
      } else {
        console.error("ID de compétition non défini dans les paramètres de l'URL.");
        // Traitez le cas où l'ID de compétition n'est pas défini
      }
    });
  }

  getCompetitionNameById(competitionId: number): void {
    this.badgeService.getCompetitionNameById(competitionId).subscribe({
      next: competitionName => {
        this.competitionName = competitionName;
        console.log(competitionName)
        this.badgeForm.patchValue({ competitionName: this.competitionName });
      },
      error: error => {
        console.error('Error fetching competition name:', error);
        // Gérez les erreurs et affichez-les à l'utilisateur si nécessaire
      }
    });
  }

  onSubmit(): void {
    if (this.badgeForm.valid) {

      const competitionId = this.badgeForm.value.competitionId;
      const badgeId = 0; // Remplacez par l'ID réel du badge si nécessaire
      const badgeName = this.badgeForm.value.name;
      const badgeDescription = this.badgeForm.value.description;

      this.badgeService.addbadge( competitionId, badgeId, badgeName, badgeDescription)
        .subscribe({
          next: response => {
            console.log('Badge added successfully:', response);
            this._snackBar.open('Badge added successfully!', 'Close', { duration: 3000 });
            this.badgeForm.reset();
            this.router.navigate(['badge', competitionId]);
          },
          error: error => {
            console.error('Error assigning badge:', error);
            // Gérez les erreurs et affichez-les à l'utilisateur si nécessaire
          }
        });
    }
  }
}
