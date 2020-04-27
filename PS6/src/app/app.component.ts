import { Component } from '@angular/core';
import {WEATHER_REPORTS} from './WEATHER-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  weatherReports = WEATHER_REPORTS;
}
