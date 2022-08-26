import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    component: ExampleComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ExampleModule { }
