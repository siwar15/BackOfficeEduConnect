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
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { DocumentComponent } from './document/document.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
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
import {PrizeListComponent} from "./Prize-list/Prize-list.component";
import { ChatroomComponent } from './chatroom/chatroom.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { TopOneQsComponent } from './top-one-qs/top-one-qs.component';

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
    PrizeListComponent,
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
    CourseComponent,
    CourseFormComponent,
    CourseUpdateComponent,
    DocumentComponent,
    DocumentFormComponent,
    DocumentUpdateComponent,
    CourseDetailsComponent,
    ChatroomComponent,
    QuestionsListComponent,
    TopOneQsComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class UicomponentsModule {}
