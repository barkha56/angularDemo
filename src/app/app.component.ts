import { Component } from '@angular/core';
import {
  appService
} from './app.service';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <button (click)="loadUser()">Load profile</button>
    {{ profile | json }}
  </div>
  `
})
export class HomeComponent {
  constructor(private appService: appService) {}
  profile = {};

  loadUser() {
    this.appService.getUser().subscribe(data => this.profile = data);
  }
}