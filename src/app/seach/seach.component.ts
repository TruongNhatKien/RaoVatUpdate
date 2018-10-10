import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { Product } from '../interfaces/Product';
@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {
  products: Product[];
  khuVucPr: string = "TQ";
  menuproductPr: number = 12;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }
  selectChangeHandler(event: any) {
    this.khuVucPr = event.target.value;
  }
  selectChangeHandlerPro(event: any) {
    this.menuproductPr = event.target.value;
  }

  Search(key) {
    const Search: any = {
      area: this.khuVucPr,
      dmsp: this.menuproductPr,
      str: key,
    }
    this.httpService.searchPro(Search).subscribe(products => {
      this.products = products;
      if (this.products.length === 0) {
        // $('.product').hide();
      }
    })
  }
}
