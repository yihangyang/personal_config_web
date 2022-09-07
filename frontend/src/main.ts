import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
import './polyfills';
import {
  bootstrapApplication
} from '@angular/platform-browser';
import {
  AppComponent
} from './app/app.component';

bootstrapApplication(AppComponent);
