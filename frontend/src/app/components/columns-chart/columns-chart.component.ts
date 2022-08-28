import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
@Component({
  selector: 'app-columns-chart',
  templateUrl: './columns-chart.component.html',
  styleUrls: ['./columns-chart.component.scss']
})
export class ColumnsChartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  highcharts = Highcharts;

  chartOptions = {
    title: {

    }
  }

}
