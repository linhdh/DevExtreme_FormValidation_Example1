import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  //versionMessage11: string = "Version must have 'x.x' pattern. x is positive integer number in range 0 - 9999.";
  //versionMessage12: string = "Version must have 'x.x.x' pattern. x is positive integer number in range 0 - 9999.";
  //versionMessage13: string = "Version must have 'x.x.x.x' pattern. x is positive integer number in range 0 - 9999.";
  //versionPattern: RegExp = /^\d{1,4}\.\d{1,4}$|^\d{1,4}\.\d{1,4}\.\d{1,4}$|^\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}$/gm;
  //versionPattern11: RegExp = /^\d{1,4}\.\d{1,4}$/gm;
  //versionPattern12: RegExp = /^\d{1,4}\.\d{1,4}\.\d{1,4}$/gm;
  //versionPattern13: RegExp = /^\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}$/gm;
  //versionPattern2: RegExp = /^[0-9]{1,4}\.[0-9]{1,4}(\.(?=[0-9]{1,4})(?<=\.)[0-9]{1,4})*$/gm;
  //versionPattern3: RegExp = /^[0-9]{1,4}\.[0-9]{1,4}(\.(?=[0-9]{1,4})(?<=\.)[0-9]{1,4}){0,2}$/gm;
  //versionPattern4: RegExp = /^[0-9]{1,4}(\.[0-9]{1,4}){1,3}$/gm;
  versionPattern5: RegExp = /^[0-9]{1,4}\.[0-9]{1,4}(\.(?=[0-9]{1,4})(?<=\.)[0-9]{1,4}){0,2}$/gm;
  versionMessage: string = "Version must have 'x.x', 'x.x.x' or 'x.x.x.x' pattern. x is positive integer number in range 0 - 9999.";
   
  constructor() {}

  handleValidated(event: any): void {
    //console.log(event);
  }

  handleOptionChanged(event: any): void {
    console.log(event);
  }
}
