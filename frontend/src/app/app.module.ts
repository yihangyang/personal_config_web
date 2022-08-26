import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './sections/navbar/navbar.module';
import { ColumnsChartModule } from './components/columns-chart/columns-chart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ColumnsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
