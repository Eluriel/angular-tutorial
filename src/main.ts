/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {App} from './app/app';

import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideHttpClient(withInterceptorsFromDi())

],
}).catch((err) => console.error(err));
