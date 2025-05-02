import { CommunicatorService } from '../communicator.service';
import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  token: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private cookieService: CookieService, private router: Router) {}

  register(registerationData: NgForm) {

    // A JSON DATA OF THE LOGIN INPUTS
    let registerationJSONData = {
      username: registerationData.value.username,
      email: registerationData.value.email,
      account_type: registerationData.value.account_type,
      password: registerationData.value.password,
      password_confirmation: registerationData.value.password_confirmation
    }

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitRegisterService(registerationJSONData).subscribe({
      next: (res) => {
        if(res.data.token) {
          this.cookieService.set("userToken", res.data.token);
          alert(res.message);
          this.router.navigate(["dashboard"]);
        } else {
          alert("Unauthorized!");
        }
      },
      error: () => {}
    })

  }

}
