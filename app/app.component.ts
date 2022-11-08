import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

interface Mons {
  name_m: string;
  holidays_national: number[];
  holidays_regional: number[];
  holidays_local: number[];
  holidays_central: number[];
  month_days: [];
  month_days_count: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  week: string[];
  arrayMons: Mons[];
  months: number[] = [];
  year:number = 2022;
  years: Date = new Date(this.year);

  /* words; */

  constructor() {
    let arrayJSON: string;

    this.months = [8,9]


    arrayJSON = `[
      {"name_m": "Septiembre", "holidays_regional": [11], "holidays_local": [29], "holidays_central": [0], "holidays_national":[0], "month_days_count": 30},
      {"name_m": "Octubre", "holidays_regional": [0], "holidays_local": [0], "holidays_central": [31], "holidays_national":[12],"month_days_count": 31}
    ]`;


    this.arrayMons = JSON.parse(arrayJSON);
    this.week = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

  }

  getDaysInYearMonth(year: number, month: number) {
    let date: Date = new Date(year, month);
    let arrayDays: Date[] = [];
    let month_days_count: number = new Date(year, month, 0).getDate();

    for (let i = 1; i <= month_days_count; i++) {
      arrayDays[i-1]=new Date(year,month,i);     
    }

    return arrayDays;
  }

}

