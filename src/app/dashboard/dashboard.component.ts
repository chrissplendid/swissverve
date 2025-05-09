import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  username: any;
  email: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private cookieService: CookieService, private router: Router) { }

  logout() {
    this.cookieService.delete("userToken");
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.onLoginService().subscribe({
      next: (res) => {
        console.log(res.data);
        if (res.status == true) {
          this.username = res.data.username;
          this.email = res.data.email;
        } else {
          alert("Error Getting User Data!");
        }
      },
      error: () => { }
    })

    this.loadExternalScript('assets/libs/bootstrap/js/bootstrap.bundle.min.js');
    this.loadExternalScript('assets/libs/simplebar/simplebar.min.js');
    this.loadExternalScript('assets/libs/apexcharts/apexcharts.min.js');
    this.loadExternalScript('assets/js/pages/ecommerce-index.init.js');
    this.loadExternalScript('assets/js/app.js');
  }

  loadExternalScript(src: string) {
    const script = document.createElement('script');
    script.src = src;  // Path to your external JS file
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      console.log('Theme JS loaded');
    };
    document.body.appendChild(script);
  }

}
