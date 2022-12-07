import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  versionPattern: RegExp = /^\d{1,4}\.\d{1,4}$|^\d{1,4}\.\d{1,4}\.\d{1,4}$|^\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}$/gm;
   
  constructor() {}
}
