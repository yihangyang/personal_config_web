import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ColumnsChartModule } from 'src/app/components/columns-chart/columns-chart.module';
import { ChartDonutModule } from 'src/app/components/chart-donut/chart-donut.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ColumnsChartModule,
    ChartDonutModule
  ]
})
export class HomeModule { }
