import { Routes } from '@angular/router';

export const SHELL_CHILDREN_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'task-manager',
        pathMatch: 'full',
      },
      {
        path: 'task-manager',
        loadChildren: () =>
          import('./../../modules/task-manager/task-manager.module').then(
            (m) => m.TaskManagerModule
          ),
      },
    ],
  },
];
