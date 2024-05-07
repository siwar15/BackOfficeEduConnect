import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AddroomComponent } from './addroom/addroom.component';
import { DisplayroomsComponent } from './displayrooms/displayrooms.component';
import { EditRoomsComponent } from './edit-rooms/edit-rooms.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
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
      {
        path: 'chatroom',
        component: ChatroomComponent,
      },
      {
        path: 'displayRooms',
        component: DisplayroomsComponent,
      },
      {
        path: 'addRoom',
        component: AddroomComponent,
      },
      {
        path: 'editRoom/:id',
        component: EditRoomsComponent,
      },
    
    
      
    ],
  },
];
