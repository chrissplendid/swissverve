import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

// Services & Guards
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommunicatorService } from './communicator.service';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular Core Providers
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideRouter(routes),

    // App Services & Guards
    CommunicatorService,
    CookieService,
    AuthService,
    AuthGuard,

    // Location Strategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
