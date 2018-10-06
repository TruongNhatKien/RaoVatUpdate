import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';

@Component({
  selector: 'app-selled',
  templateUrl: './selled.component.html',
  styleUrls: ['./selled.component.scss']
})
export class SelledComponent implements OnInit {
  products: Product[];
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
}


