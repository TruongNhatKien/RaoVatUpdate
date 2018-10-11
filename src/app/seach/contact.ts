import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { DetailProService } from '../providers/detail-pro.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../interfaces/User';
import { SearchService } from '../providers/search.service';
import { HttpService } from '../providers/http.service';
declare var $: any;

@Component({
  selector: 'app-contact',
  template: `
  <h2 mat-dialog-title>Thông tin liên hệ</h2>

  <div class="contact">
    <span>Tên người bán:{{nameUser}}</span> <br>
    <span>Số điện thoại liên hệ:[+84]{{numberUser}}</span>
  </div>
   

  <mat-dialog-actions>
    <button mat-button mat-raised-button color="primary" [mat-dialog-close]="true">OK</button>
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

export class ContactComponent implements OnInit {
  nameUser: string = "";
  numberUser: number;

  constructor(
    private searchService: SearchService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.searchService.getIdUs().subscribe(idUser => {
      this.httpService.getUserByIdUser(idUser).subscribe(user => {
        console.log(user);
        this.nameUser = user.name;
        this.numberUser = user.number;
        console.log(this.nameUser +" "+this.numberUser);
      })
    });
  }
}