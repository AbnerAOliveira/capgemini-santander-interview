import { Routes } from '@angular/router';

export const SHELL_CHILDREN_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'taskManager',
        pathMatch: 'full',
      },
    ],
  },
];
