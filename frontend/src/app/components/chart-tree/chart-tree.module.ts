import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartTreeComponent } from './chart-tree.component';



@NgModule({
  declarations: [
    ChartTreeComponent,
  ],
  imports: [
    HighchartsChartModule
  ],
  exports: [
    ChartTreeComponent,
  ]

})
export class ChartTreeModule { }
