import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommunicatorService } from './communicator.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withFetch()), CommunicatorService, CookieService, AuthService, AuthGuard]
};
