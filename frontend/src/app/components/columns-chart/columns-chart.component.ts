import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-columns-chart',
  templateUrl: './columns-chart.component.html',
  styleUrls: ['./columns-chart.component.scss']
})
export class ColumnsChartComponent implements OnInit {
  Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };
  constructor() { }
  ngOnInit(): void {

  }

}
