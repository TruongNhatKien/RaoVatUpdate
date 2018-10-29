import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,

  ) { }

  ngOnInit() {
    this.titleService.setTitle("Home")
  }
}
