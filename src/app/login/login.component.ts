import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommunicatorService } from '../communicator.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  response: any[] = [];
  token: any;
  login(loginData: NgForm) {
    // A JSON DATA OF THE LOGIN INPUTS
    let loginJSONData = {
      email: loginData.value.email,
      password: loginData.value.password
    }
    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitLoginService(loginJSONData).subscribe({
      next: (res) => {
        this.token = this.cookieService.set("userToken", res.token);
        this.response = res;
        console.log(res)
        this.router.navigate
        (["/dashboard"])
      },
      error: () => {}
    })

  }

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private cookieService: CookieService, private router: Router) {}
    

}
