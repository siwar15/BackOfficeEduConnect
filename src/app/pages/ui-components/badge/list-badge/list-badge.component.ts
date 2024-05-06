import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {BadgeService} from "../../../../services/Badge.service";
import {Badge} from "../../../../Modele/Badge";


@Component({
  selector: 'app-list-badge',
  templateUrl: './list-badge.component.html',
  styleUrls: ['./list-badge.component.css']
})
export class ListBadgeComponent implements OnInit {
  badges: Badge[] = [];

  competitionId: number;

  constructor(private route: ActivatedRoute, private badgeService: BadgeService,private router: Router ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.competitionId = +params['id']; // Récupère l'ID de la compétition depuis l'URL
      console.log('ID de la compétition récupéré:', this.competitionId);

      // Maintenant, vous pouvez utiliser this.competitionId pour appeler le service Badge
      // et récupérer les badges correspondants à cette compétition
      this.loadBadges();
    });
  }
  naviguerVersAjoutBadge(idCompet: number) {
    this.router.navigate(['/ajouter-badge',  idCompet ]);
    console.log('IDddddddddd:', idCompet)
  }

  loadBadges(): void {
    this.badgeService.getBadgesByCompetitionId(this.competitionId).subscribe(
      badges => {
        this.badges = badges;
        console.log('Badges récupérés avec succès : ', badges);
      },
      error => {
        console.error('Une erreur s\'est produite lors du chargement des badges : ', error);
      }
    );
  }

}
