import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import {AffichercompetitionComponent} from "./affichercompetition/affichercompetition.component";
import {ListBadgeComponent} from "./badge/list-badge/list-badge.component";

export const UiComponentsRoutes: Routes = [
  {

    path: '',
    children: [
      {
        path: 'competition',
        component: AffichercompetitionComponent,
      },

      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
    ],
  },

];
