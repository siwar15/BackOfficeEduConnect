import { Component, OnInit } from "@angular/core";
import { CompetService } from "../../../services/Compet.Service";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
})
export class StatComponent implements OnInit {
  barChartOptions: any = {
    chart: {
      type: 'bar',
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      title: {
        text: 'Nombre de badges'
      }
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }: { series: any, seriesIndex: any, dataPointIndex: any, w: any }) {
        const competitionName = w.config.xaxis.categories[dataPointIndex];
        const badgeCount = series[seriesIndex][dataPointIndex];
        return `<div class="tooltip">${competitionName}: ${badgeCount} badges</div>`;
      }
    },
    series: [
      {
        name: 'Badges par compétition',
        data: []
      }
    ]
  };

  constructor(private compService: CompetService) { }

  ngOnInit(): void {
    this.compService.countBadgesPerCompetition().subscribe(
      (data: any) => {
        if (data && Object.keys(data).length > 0) {
          const categories = [];
          const seriesData = [];
          console.log(data)

          // Convertir les données JSON en tableau de clés et de valeurs
          for (const key in data) {
            categories.push(key);
            seriesData.push(data[key]);
          }

          // Mettre à jour les options du graphique avec les données converties
          this.barChartOptions.xaxis.categories = categories;
          this.barChartOptions.series[0].data = seriesData;
        } else {
          console.error('Les données reçues ne sont pas valides pour le graphique.');
        }
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données des compétitions et des badges :', error);
      }
    );
  }
}
