import { Component, Inject, OnInit } from '@angular/core';
import { ITask, ITask2 } from '../../models/task.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  title!: string;
  description!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ITask2,
    private dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    this.title = this.data.tasks[this.data.id].title;
    this.description = this.data.tasks[this.data.id].description;

    console.log(this.data.id);
  }

  editTask() {
    this.data.tasks.filter((v, i) => {
      if (i == this.data.id) {
        this.data.tasks[i].title = this.title;
        this.data.tasks[i].description = this.description;
      }
    });
    console.log(this.data);
    this.dialogRef.close(this.data);
  }
}
