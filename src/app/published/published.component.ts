import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';
import { StoreService } from '../providers/store.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.scss']
})
export class PublishedComponent implements OnInit {
  products: Product[];
  user: User;
  idProduct: number;
  namePro: string;
  pricePro: number;
  infoPro: string;
  addrPro: string;
  constructor(
    private httpService: HttpService,
    private toastr:ToastrService,
    private titleService: Title

  ) { }

  ngOnInit() {
    this.titleService.setTitle('Đang Bán')
    this.user = JSON.parse(localStorage.getItem('user'));
    this.httpService.getPublished(this.user.idUser).subscribe(products => {
      this.products = products;
    });
  }

  showSuccessDelete() {
    this.toastr.success('Xoá sản phẩm thành công!');
  }

  showSuccessSelled() {
    this.toastr.success('Chúc mừng bạn đã bán được sản phẩm!');
  }

  public onRightClick(event, idProduct) {
    event.preventDefault();
    const locateX = event.pageX;
    const locateY = event.pageY;
    $('.menu-right').addClass('menu-right-active');
    $('.menu-right-active').css('top', locateY);
    $('.menu-right-active').css('left', locateX);
    this.idProduct = idProduct;
  }

  selled() {
    this.httpService.putPublished(this.user.idUser, this.idProduct).subscribe(data => {
      this.httpService.getPublished(this.user.idUser).subscribe(products => {
        this.products = products;
        this.showSuccessSelled();
      });
    });
  }

  delete(idProduct) {
    this.httpService.deletePro(idProduct).subscribe(pro=>{
      if(pro){
        this.httpService.getPublished(this.user.idUser).subscribe(products => {
          this.products = products;
          this.showSuccessDelete();
        });
      }
    })
  }
}
