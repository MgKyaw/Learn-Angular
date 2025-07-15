import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span>Yes, the server is running</span>
  `,
})
export class App {
  isServerRunning = true;
}
