import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  countries: any;
  token: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('/assets/json/countries.json').subscribe(data => {
      this.countries = data;
    });
  }

  register(registerationData: NgForm) {

    // A JSON DATA OF THE LOGIN INPUTS
    let registerationJSONData = {
      first_name: registerationData.value.first_name,
      last_name: registerationData.value.last_name,
      username: registerationData.value.username,
      email: registerationData.value.email,
      country: registerationData.value.country,
      account_type: registerationData.value.account_type,
      currency: registerationData.value.currency,
      password: registerationData.value.password,
      password_confirmation: registerationData.value.password_confirmation
    }

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitRegisterService(registerationJSONData).subscribe({
      next: (res) => {
        console.log('Register response:', res);

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
        console.error('Registration error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
