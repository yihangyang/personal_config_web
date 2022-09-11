import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('src/app/pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'example',
    loadChildren: () => import('src/app/pages/example/example.module').then((m) => m.ExampleModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
