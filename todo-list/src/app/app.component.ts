import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pulkit todo list';
  constructor() {
    // setTimeout(() => {
    //   this.title = "Let's Go"
    // }, 2000);
  }
}
