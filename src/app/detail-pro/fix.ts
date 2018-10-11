import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { DetailProService } from '../providers/detail-pro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fix',
  template: `
  <h2 mat-dialog-title>Cập nhật thông tin sản phẩm</h2>

  <mat-form-field>
    <input matInput [(ngModel)]="product.name" placeholder="Tên sản phẩm">
  </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="product.addr" placeholder="Địa chỉ">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="product.info" placeholder="Thông tin sản phẩm">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="product.price" placeholder="Giá tiền">
    </mat-form-field>

  <mat-dialog-actions>
    <button mat-button mat-raised-button color="primary" [mat-dialog-close]="true">Cập nhật</button>
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

export class FixComponent implements OnInit {
  product: Product;

  constructor(
    private detailProService: DetailProService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.detailProService.getDetailPro().subscribe(data => {
      this.product = data;
    });
  }
}