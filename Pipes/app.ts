import {Component} from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username }}
  `,
  imports: [],
})
export class App {
  username = 'yOunGTECh';
}
