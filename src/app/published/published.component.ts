import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.scss']
})
export class PublishedComponent implements OnInit {
  products: Product[];
  user: User;
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.httpService.getPublished(this.user.idUser).subscribe(products => {
      this.products = products;
    });
  }
}
