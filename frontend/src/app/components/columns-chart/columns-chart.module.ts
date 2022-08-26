import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsChartComponent } from './columns-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ColumnsChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    ColumnsChartComponent
  ]
})
export class ColumnsChartModule { }
