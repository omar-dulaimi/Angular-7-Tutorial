import { Component, OnInit } from '@angular/core';
import { DataFromAPIService } from '../data-from-api.service';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private api: DataFromAPIService) {}

  users: Object;

  ngOnInit() {
    this.api.getUsers().subscribe(data => {
      this.users = data;
      console.log('users: \n');
      console.log(this.users);
    });
  }
}
