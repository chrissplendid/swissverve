import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, private cookieService: CookieService) {}

  logout() {
    this.cookieService.delete("userToken");
    this.router.navigate(["/"]);
  }

}
