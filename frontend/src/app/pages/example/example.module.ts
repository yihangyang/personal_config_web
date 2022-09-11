import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { RouterModule, Routes } from '@angular/router';
import { ColumnsChartModule } from 'src/app/components/columns-chart/columns-chart.module';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ColumnsChartModule
  ],
})
export class ExampleModule { }
