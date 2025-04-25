import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    return this.cookieService.get("userToken")
  }

  isLoggedIn() {
    return this.getToken() != "";
  }

  constructor(private cookieService: CookieService) { }
}
