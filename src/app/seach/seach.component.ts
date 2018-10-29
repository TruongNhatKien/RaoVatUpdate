import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { Product } from '../interfaces/Product';
import { MatDialog } from '@angular/material';
import { ContactComponent } from './contact';
import { SearchService } from '../providers/search.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
declare var $: any;
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
    private httpService: HttpService,
    private dialog: MatDialog,
    private searchService: SearchService,
    private titleService: Title,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Search');
    $('.nodata').hide();
    this.httpService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

  showError() {
    this.toastr.error('Sản phẩm vừa tìm không có, Vui lòng thử lại !');
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
        $('.product').hide();
        $('.nodata').show();
        this.showError();
      } else{
        $('.product').show();
        $('.nodata').hide();
      }
    })
  }

  contact(idUser) {
    this.searchService.idUs(idUser);
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((isConfirm) => {
      if (isConfirm) {
      }
    })
  }
}