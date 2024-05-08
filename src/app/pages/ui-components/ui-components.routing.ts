import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { DocumentComponent } from './document/document.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import {AffichercompetitionComponent} from "./affichercompetition/affichercompetition.component";
import {ListBadgeComponent} from "./badge/list-badge/list-badge.component";
import {PrizeListComponent} from "./Prize-list/Prize-list.component";
import {StatComponent} from "./stat/stat.component";
import { ChatroomComponent } from './chatroom/chatroom.component';
import {AddQuestionComponent} from "./add-question/add-question.component";


export const UiComponentsRoutes: Routes = [
  {

    path: '',
    children: [
      {
        path: 'competition',
        component: AffichercompetitionComponent,
      },

      {
        path: 'Prize',
        component: PrizeListComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'stat',
        component: StatComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'course',
        component: CourseComponent,
      },
      {
        path: 'addcourse',
        component: CourseFormComponent,
      },
      {
        path: 'updatecourse/:courseID',
        component: CourseUpdateComponent,
      },
      {
        path: 'document',
        component: DocumentComponent,
      },
      {
        path: 'adddocument',
        component: DocumentFormComponent,
      },
      {
        path: 'updatedocument/:documentID',
        component: DocumentUpdateComponent,
      },{
        path : 'addQuestion',
        component: AddQuestionComponent,
        },
      {
        path: 'chatroom',
        component: ChatroomComponent,
      },
    ],
  },

];
