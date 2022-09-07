import { Component, OnInit } from '@angular/core';
import { ColumnsChartComponent } from 'src/app/components/columns-chart/columns-chart.component';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
