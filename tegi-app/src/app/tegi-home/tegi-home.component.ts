import { Component, OnInit } from '@angular/core';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-tegi-home',
  templateUrl: './tegi-home.component.html',
  styleUrls: ['./tegi-home.component.css']
})

export class TegiHomeComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openImageDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      height:'95vh',
      width: '95vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
