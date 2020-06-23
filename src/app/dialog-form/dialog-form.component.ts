import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';

export interface DialogData {
  category: string;
  todo: string;
}
interface Card {
  id: string;
  title: string;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
  selectedValue: string;

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
