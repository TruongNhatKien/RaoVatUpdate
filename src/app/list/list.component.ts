import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public local = true;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.local = false;
    }
  }

}
