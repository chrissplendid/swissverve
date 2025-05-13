import { CommunicatorService } from '../communicator.service';
import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  token: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private cookieService: CookieService, private router: Router) { }

  // LOGIN METHOD
  login(loginData: NgForm) {

    // A JSON DATA OF THE LOGIN INPUTS
    let loginJSONData = {
      email: loginData.value.email,
      password: loginData.value.password
    }

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitLoginService(loginJSONData).subscribe({
      next: (res) => {
        console.log('Login response:', res);

        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }

        const token = res?.data?.token;
        if (token) {
          this.cookieService.set('userToken', token);
          this.router.navigate(['dashboard']);
        } else {
          Swal.fire('Unauthorized', 'No token received.', 'error');
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }


}
