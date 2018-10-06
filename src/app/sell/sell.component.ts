import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  user: User;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
