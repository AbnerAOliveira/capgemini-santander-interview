import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { TopbarComponent } from '../components/topbar/topbar.component';

@NgModule({
  declarations: [ShellComponent, TopbarComponent],
  imports: [CommonModule, ShellRoutingModule, MatToolbarModule],
})
export class ShellModule {}
