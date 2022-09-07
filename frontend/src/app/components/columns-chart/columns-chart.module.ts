import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ColumnsChartComponent } from './columns-chart.component';
@NgModule({
  declarations: [
    ColumnsChartComponent
  ],
  imports: [
    HighchartsChartModule
  ],
  exports: [
    ColumnsChartComponent
  ]
})
export class ColumnsChartModule { }
