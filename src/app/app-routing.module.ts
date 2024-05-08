import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ListBadgeComponent} from "./pages/ui-components/badge/list-badge/list-badge.component";
import {AddBadgeComponent} from "./pages/ui-components/badge/add-badge/add-badge.component";
import {EditercompetitionComponent} from "./pages/ui-components/editercompetition/editercompetition.component";
import {ListUserComponent} from "./pages/ui-components/user/list-user/list-user.component";
import {AffichercompetitionComponent} from "./pages/ui-components/affichercompetition/affichercompetition.component";
import { QuestionsListComponent } from './pages/ui-components/questions-list/questions-list.component';
import { TopOneQsComponent } from './pages/ui-components/top-one-qs/top-one-qs.component';

const routes: Routes = [
  {


    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },

      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  { path: 'badge/:id', component: ListBadgeComponent },
  { path: 'edit-competition/:id', component: EditercompetitionComponent },
  { path: 'ajouter-badge/:idCompet', component: AddBadgeComponent },
  { path: 'users/:id', component: ListUserComponent },
  { path: 'compet', component: AffichercompetitionComponent },
  { path: 'question', component: QuestionsListComponent },
  { path: 'Topquestion', component: TopOneQsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
