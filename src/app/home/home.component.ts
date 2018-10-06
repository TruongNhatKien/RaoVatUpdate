import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit() {
   
  }
}
