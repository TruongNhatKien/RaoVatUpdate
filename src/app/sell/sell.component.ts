import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';
import { DetailProService } from '../providers/detail-pro.service';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  user: User;
  isClick = true;
  constructor(
    private titleService: Title,
    private detailPrService: DetailProService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Tôi Bán');
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  public onLeftClick() {
    $('.menu-right').removeClass('menu-right-active');
  }

  published() {
    this.isClick = true;
    this.detailPrService.isClick(this.isClick);
  }

  selled() {
    this.isClick = false;
    this.detailPrService.isClick(this.isClick);
  }
}
