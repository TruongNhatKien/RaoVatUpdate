import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/Product';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';
import { MatDialog } from '@angular/material';
import { FixComponent } from './fix';
import { DetailProService } from '../providers/detail-pro.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.scss']
})
export class DetailProComponent implements OnInit {
  idProduct: number;
  idUser: number;
  productsPub: Product[];
  product: Product;
  namePro: string = "";
  pricePro: number;
  infoPro: string = "";
  addrPro: string = "";
  user: User;

  constructor(
    private activateService: ActivatedRoute,
    private httpService: HttpService,
    private dialog: MatDialog,
    private detailProService: DetailProService,
    private toastr: ToastrService,
    private titleService: Title,

  ) { }

  ngOnInit() {
    this.titleService.setTitle("Detail Product")
    this.load();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  showSuccess() {
    this.toastr.success('Cập nhật thông tin sản phẩm thành công!');
  }

  load() {
    this.idProduct = +this.activateService.snapshot.params.idProduct;
    this.idUser = this.activateService.snapshot.params.idUser;
    this.detailProService.getIsClick().subscribe(data => {
      this.httpService.getPublished(this.idUser).subscribe(products => {
        this.productsPub = products;
        for (let i = 0; i < this.productsPub.length; i++) {
          if (this.productsPub[i].idProduct === this.idProduct) {
            this.namePro = this.productsPub[i].name;
            this.infoPro = this.productsPub[i].info;
            this.pricePro = this.productsPub[i].price;
            this.addrPro = this.productsPub[i].addr;

            const pro: any = {
              idProduct: this.idProduct,
              name: this.namePro,
              price: this.pricePro,
              info: this.infoPro,
              addr: this.addrPro,
            }
            this.detailProService.detailPro(pro);
            this.product = pro;
          }
        }
      });
    });
  }

  fix() {
    let dialogRef = this.dialog.open(FixComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((isConfirm) => {
      if (isConfirm) {
        this.httpService.putPublishedUpdate(this.product).subscribe(pro => {
          if (pro) {
            this.namePro = pro.name;
            this.pricePro = pro.price;
            this.infoPro = pro.info;
            this.addrPro = pro.addr;
            this.showSuccess();
          }
        })
      }
    });
  }

}
