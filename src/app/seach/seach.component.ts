import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {
  khuVucPr: string;
  menuproductPr: number;
  constructor() { }

  ngOnInit() {
  }
  selectChangeHandler(event: any) {
    this.khuVucPr = event.target.value;
  }
  selectChangeHandlerPro(event: any) {
    this.menuproductPr = event.target.value;
  }
}
