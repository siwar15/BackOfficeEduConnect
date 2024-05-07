import {Component, OnInit} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import {Router} from "@angular/router";
import {CompetitionAddComponent} from "../Ajoutcompetition/competition-add.component";
import {FormGroup} from "@angular/forms";
import {Competition} from "../../../Modele/Competition";
import {User} from "../../../Modele/User";
import {CompetService} from "../../../services/Compet.Service";





@Component({
  selector: 'app-affichercompetition',
  templateUrl: './affichercompetition.component.html',
  styleUrls: ['./affichercompetition.component.css'],

})
export class AffichercompetitionComponent implements OnInit {

  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = []; // Tableau pour stocker les compétitions filtrées
  searchTerm: string = '';
  users: User[] = [];
  constructor(private competService: CompetService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCompetitions();
    this.getAllUsers();

  }

  getAllUsers(): void {
    this.competService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
    );
  }

  loadCompetitions(): void {
    this.competService.getAllCompetitions().subscribe(
      competitions => {
        this.competitions = competitions;
        this.filteredCompetitions = competitions; // Initialisez le tableau de compétitions filtrées
      },
      error => {
        console.log('Une erreur s\'est produite lors du chargement des compétitions : ', error);
      }
    );
  }





  deleteCompetition(id: number): void {
    if (confirm('Are you sure you want to delete this competition?')) {
      this.competService.deleteCompetition(id).subscribe(
        () => {
          console.log('Competition deleted successfully');
          this.loadCompetitions();
        },
        (error) => {
          console.error('Error deleting competition:', error);
        }
      );
    }
  }

  // Méthode pour filtrer les compétitions en ligne
  filterOnline(): void {
    this.filteredCompetitions = this.competitions.filter(competition => competition.isOnline === true);
  }

  // Méthode pour filtrer les compétitions hors ligne
  filterOffline(): void {
    this.filteredCompetitions = this.competitions.filter(competition => competition.isOnline === false);
  }
  openAddCompetitionForm(): void {
    const dialogRef = this.dialog.open(CompetitionAddComponent, {
      width: '400px',
      height: '500px'
      // Définissez la largeur souhaitée de votre boîte de dialogue
    });
  }
  navigateToBadges(id: number):void{
    this.router.navigate(['/badge', id]);

  }
  editCompetition(id: number): void {
    this.router.navigate(['/edit-competition', id]); // Naviguer vers le formulaire d'édition
    console.error(id)
     // Charger les détails de la compétition dans le formulaire
  }
  isCompetitionFinished(competition: Competition): boolean {
    const endDate = new Date(competition.endDate);
    const currentDate = new Date();
    return endDate < currentDate;
  }


  filterCompetitions(): void {
    this.filteredCompetitions = this.competitions.filter(competition =>
      competition.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  navigateToUsers(competitionId: number): void {
    // Naviguer vers le composant cible avec l'ID de la compétition en tant que paramètre
    this.router.navigate(['/users', competitionId]);
  }}
