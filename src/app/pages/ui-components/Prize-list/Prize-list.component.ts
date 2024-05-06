import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Prize} from "../../../Modele/Prize";
import {PrizeService} from "../../../services/Prize.Service";

@Component({
  selector: 'app-enum-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css']
})
export class PrizeListComponent implements OnInit {
  prizes: Prize[] = [];
  newPrize: Partial<Prize> = {}; // Nouveau prix à ajouter
  showAddForm: boolean = false; // Indique si le formulaire doit être affiché

  constructor(private prizeService: PrizeService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPrizes();
  }

  getAllPrizes(): void {
    this.prizeService.getAllPrizes().subscribe(
      (data: Prize[]) => {
        this.prizes = data;
      },
      (error) => {
        console.log('Error fetching prizes:', error);
      }
    );
  }

  deletePrize(id: number): void {
    this.prizeService.deletePrize(id).subscribe(
      () => {
        console.log('Prize deleted successfully.');
        this.getAllPrizes(); // Actualise la liste des prix après la suppression
      },
      (error) => {
        console.log('Error deleting prize:', error);
      }
    );
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm; // Inverse la valeur pour afficher ou masquer le formulaire
    if (!this.showAddForm) {
      this.resetAddForm(); // Réinitialise le formulaire si on le cache
    }
  }

  resetAddForm(): void {
    this.newPrize = {}; // Réinitialise les valeurs du nouveau prix
  }

  addPrize(newPrizeData: Partial<Prize>): void {
    this.prizeService.ajouterP(newPrizeData as Prize).subscribe(
      (addedPrize: Prize) => {
        console.log('Prize added successfully:', addedPrize);
        this.getAllPrizes(); // Actualise la liste des prix après l'ajout
        this.toggleAddForm(); // Cache le formulaire après l'ajout
      },
      (error) => {
        console.log('Error adding prize:', error);
      }
    );
  }

  cancelAdd(): void {
    this.toggleAddForm(); // Cache le formulaire sans ajouter de prix
  }
}
