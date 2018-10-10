import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { LogoutConfirmComponent } from './logout-confirm';
import { MatDialog } from '@angular/material';
import { DetailProService } from '../providers/detail-pro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public local = false;
  user: User;
  users: User[];
  username: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private detailProService: DetailProService
  ) { }

  ngOnInit() {
   
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.local = true;
      this.username = this.user.name;
    }
  }
  SignOut() {
    let dialogRef = this.dialog.open(LogoutConfirmComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((isConfirm) => {
      if (isConfirm) {
        // logout
        this.router.navigate(['/user/login']);
        localStorage.clear();
        location.reload();
      }
    });
  }
}