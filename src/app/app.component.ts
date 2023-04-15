import { Component } from '@angular/core';
import packagejson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public appVersion: string = packagejson.version;

  constructor() {
  }
}
