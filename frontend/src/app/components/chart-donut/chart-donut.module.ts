import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartDonutComponent } from './chart-donut.component';


@NgModule({
  declarations: [ChartDonutComponent],
  imports: [
    HighchartsChartModule
  ],
  exports: [
    ChartDonutComponent
  ]
})
export class ChartDonutModule { }
