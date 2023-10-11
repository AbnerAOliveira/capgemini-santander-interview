import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { MatIconModule } from '@angular/material/icon';
import { TaskAddEditComponent } from './components/task-add-edit/task-add-edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { TaskService } from './components/services/task.service';
import { CoreService } from './components/core/core.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [TaskManagerComponent, ModalComponent, TaskAddEditComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [TaskService, CoreService],
})
export class TaskManagerModule {}
