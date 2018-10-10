import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../interfaces/User';
import { InfoUserService } from '../providers/info-user.service';

@Component({
  selector: 'app-updateUser',
  template: `
  <h2 mat-dialog-title>Cập nhật thông tin Cá nhân</h2>

  <mat-form-field>
    <input matInput [(ngModel)]="user.name" placeholder="Họ tên">
  </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="user.addr" placeholder="Địa chỉ">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="user.number" placeholder="Số điện thoại">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="user.sex" placeholder="Giới tính">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="user.old" placeholder="Tuổi">
    </mat-form-field>

  <mat-dialog-actions>
    <button mat-button mat-raised-button color="primary" [mat-dialog-close]="true">Sửa</button>
  </mat-dialog-actions>
  `,
  styles: [
    `
    mat-dialog-actions{
      justify-content: center;
    }
    mat-form-field{
      width:350px;
    }
    h2{
      text-align: center;
    }
    `
  ]
})

export class UpdateUserComponent implements OnInit {
  user: User;

  constructor(
    private infoUserService:InfoUserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.infoUserService.getInfoUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  showError() {
    this.toastr.error('Vui lòng nhập tất cả thông tin! Không để trông !');
  }
}