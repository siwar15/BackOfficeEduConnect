import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../Modele/User";
import {Badge} from "../../../../Modele/Badge";
import {CompetService} from "../../../../services/Compet.Service";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-list-badge',
  templateUrl: './list-user.component.html',

})
export class ListUserComponent implements OnInit {
  usersWithBadges: User[] = [];

  selectedBadge: Badge | null = null;
  users: any[] = [];
  public searchEmail: string = '';

    constructor(private competservice: CompetService, private route: ActivatedRoute,private _snackBar: MatSnackBar) { }
  currentPage: number = 1;
  itemsPerPage: number = 3;


  ngOnInit(): void {this.route.params.subscribe(params => {
    const competitionId = params['id'];
    // Appelez la fonction getUsersByCompetition avec l'ID extrait de l'URL
    this.getUsersByCompetition(competitionId);


  });

  }



  getUsersByCompetition(competitionId: number) {
    // Appelez votre service HTTP avec l'ID de la compétition
    this.competservice.getUsersByCompetition(competitionId).subscribe(
      (data) => {
        // Traitez les données reçues de votre API
        this.users = data
        console.log(data);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs de la compétition : ', error);
      }
    );
  }
 /* assignScore(userId: number, percentage: number): void {
    const competitionId = this.route.snapshot.params['id']; // Récupérer l'ID de la compétition de l'URL
    this.competservice.addScore(userId, competitionId, percentage).subscribe(
      (data) => {
        console.log('Score assigned successfully:', data);
        // Supprimer l'utilisateur du tableau après attribution du score
        const index = this.users.findIndex(user => user.idU === userId);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'attribution du score : ', error);
      }
    );
  }*/
// Déclaration de la propriété pour stocker les scores attribués

  // Créez une variable pour stocker les scores déjà attribués
  assignScore(userId: number, percentage: number): void {
    const competitionId = this.route.snapshot.params['id']; // Récupérer l'ID de la compétition de l'URL
    this.competservice.addScore(userId, competitionId, percentage).subscribe(
      (data) => {
        console.log('Score assigned successfully:', data);

        // Supprimer l'utilisateur du tableau après attribution du score

      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'attribution du score : ', error);
        this._snackBar.open('Score attribué à l\'utilisateur avec succès !', 'Fermer', {
          duration: 3000, // Durée d'affichage de la notification en millisecondes (3 secondes dans cet exemple)
          horizontalPosition: 'center', // Position horizontale de la notification
          verticalPosition: 'top' // Position verticale de la notification
        });
      }
    );
  }


  clearSearch(): void {
    this.searchEmail = '';
  }
  /*get filteredUsers() {
    return this.usersWithBadges.filter(user =>
      user.email.toLowerCase().includes(this.searchEmail.toLowerCase())
    )}*/
  get filteredUsers() {
    return this.users.filter(user =>
      user.emailAddress.toLowerCase().includes(this.searchEmail.toLowerCase())
    );
  }





  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  get isPreviousPageDisabled(): boolean {
    return this.currentPage === 1;
  }

  get isNextPageDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }
  pageChanged(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    this.pageChanged(this.currentPage - 1);
  }

  nextPage(): void {
    this.pageChanged(this.currentPage + 1);
  }


}
