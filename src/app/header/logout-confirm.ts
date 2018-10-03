import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-confirm',
  template: `
  <h2 mat-dialog-title>Logout</h2>
  <mat-dialog-content>Are you sure?</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-raised-button [mat-dialog-close]="false">No</button>
    <button mat-button mat-raised-button color="primary" [mat-dialog-close]="true">Yes</button>
  </mat-dialog-actions>
  `

})

export class LogoutConfirmComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}