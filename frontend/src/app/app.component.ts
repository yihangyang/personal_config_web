import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartOptions, Chart } from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
        type: 'bar'
    },
  }

  images = [
    'assets/test.jpg',
    'assets/test.jpg',
    'assets/test.jpg'
  ]

  ngOnInit(): void {

  }
}
