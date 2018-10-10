import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';
import { MatDialog } from '@angular/material';
import { UpdateUserComponent } from './updateUser';
import { InfoUserService } from '../providers/info-user.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  user: User;
  nameUser: string = '';
  addrUser: string = '';
  numberUser: number;
  sexUser: string = '';
  oldUser: number;
  emailUser: string = '';
  constructor(
    private dialog: MatDialog,
    private httpService: HttpService,
    private toastr: ToastrService,
    private infoUserService: InfoUserService
  ) { }

  ngOnInit() {
    this.emailUser = JSON.parse(localStorage.getItem('user')).email;
    this.httpService.getUser().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == this.emailUser) {
          this.nameUser = users[i].name;
          this.addrUser = users[i].addr;
          this.sexUser = users[i].sex;
          this.oldUser = users[i].old;
          this.numberUser = users[i].number;
          this.emailUser = users[i].email;

          const user: any = {
            name: this.nameUser,
            addr: this.addrUser,
            number: this.numberUser,
            sex: this.sexUser,
            old: this.oldUser,
            email: this.emailUser,
          }
          this.infoUserService.infoUser(user);
          this.user = user;
        }
      }
    });
  }

  showSuccess() {
    this.toastr.success('Cập nhật thông tin sản phẩm thành công!');
  }

  updateUser() {
    let dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((isConfirm) => {
      if (isConfirm) {
        this.httpService.putUserUpdate(this.user).subscribe(user => {
          if (user) {
            // if(user.sex == true){
            //   this.sexUser = "Nam";
            // } else{
            //   this.sexUser = "Nữ"
            // }
            this.nameUser = user.name;
            this.addrUser = user.addr;
            this.numberUser = user.number;
            this.sexUser = user.sex;
            this.oldUser = user.old;
            this.showSuccess();
          }
        });
      }
    });
  }
}