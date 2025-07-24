import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
}
