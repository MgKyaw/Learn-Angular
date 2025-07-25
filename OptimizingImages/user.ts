import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-user",
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img
          ngSrc="/assets/logo.svg"
          alt="Angular logo"
          width="32"
          height="32"
        />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
    <div class="image-container">
      //Container div has 'position: "relative"'
      <img ngSrc="www.example.com/image.png" fill />
    </div>
    <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
  `,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://my.base.url/'),
  ]
})
export class User {
  logoUrl = "/assets/logo.svg";
  logoAlt = "Angular logo";
  username = "youngTech";
}
