import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { SHELL_CHILDREN_ROUTES } from './shell-children-routes';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: SHELL_CHILDREN_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
