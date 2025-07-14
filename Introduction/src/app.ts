// import 'zone.js';
import 'reflect-metadata';
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Hello Angular without CLI!</h1>`
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch(err => console.error(err));
