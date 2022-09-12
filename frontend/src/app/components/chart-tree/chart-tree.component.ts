import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-tree',
  templateUrl: './chart-tree.component.html',
  styleUrls: ['./chart-tree.component.scss']
})
export class ChartTreeComponent implements OnInit {

  Highcharts = Highcharts;
  linechart: any = {
  }
  constructor() { }

  ngOnInit(): void {
  }


}
