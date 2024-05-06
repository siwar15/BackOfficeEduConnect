import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import {ListUserComponent} from "./user/list-user/list-user.component";

import {EditercompetitionComponent} from "./editercompetition/editercompetition.component";
import {ListBadgeComponent} from "./badge/list-badge/list-badge.component";
import {AddBadgeComponent} from "./badge/add-badge/add-badge.component";
import {AffichercompetitionComponent} from "./affichercompetition/affichercompetition.component";
import {AppModule} from "../../app.module";

import {NgApexchartsModule} from "ng-apexcharts";
import {CompetitionAddComponent} from "./Ajoutcompetition/competition-add.component";
import {SidebarComponent} from "../../layouts/full/sidebar/sidebar.component";
import {HeaderComponent} from "../../layouts/full/header/header.component";
import {AppNavItemComponent} from "../../layouts/full/sidebar/nav-item/nav-item.component";
import {BrandingComponent} from "../../layouts/full/sidebar/branding.component";
import {StatComponent} from "./stat/stat.component";

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,

    NgApexchartsModule,
    NgApexchartsModule,


  ],
  declarations: [
    StatComponent,
    BrandingComponent,
    AppNavItemComponent,
    SidebarComponent,
    HeaderComponent,
    CompetitionAddComponent,
    AffichercompetitionComponent,
    AddBadgeComponent,
    ListBadgeComponent,
    EditercompetitionComponent,

    ListUserComponent,
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class UicomponentsModule {}
