import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Textbox Validation Example 1';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
