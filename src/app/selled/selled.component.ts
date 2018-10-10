import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';
declare var $: any;

@Component({
  selector: 'app-selled',
  templateUrl: './selled.component.html',
  styleUrls: ['./selled.component.scss']
})
export class SelledComponent implements OnInit {
  products: Product[];
  idProduct: number;
  user: User;
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.httpService.getSelled(this.user.idUser).subscribe(products => {
      this.products = products;
    });
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
}


