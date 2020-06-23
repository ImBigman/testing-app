import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todo: string

  constructor(public dialog: MatDialog){}

  ngOnInit(){}


    openDialog(): void {
      const dialogRef = this.dialog.open(DialogFormComponent, {
        width: '400px',
        data: {todo: this.todo}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.todo = result;
      });
    }
}
