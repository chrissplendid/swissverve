import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsettings',
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './accountsettings.component.html',
  styleUrl: './accountsettings.component.css'
})
export class AccountsettingsComponent implements OnInit {
  accountNumber: any;
  accountName: any;
  accountType: any;
  balance: any;
  countries: any;
  country: any;
  currency: any;
  email: any;
  firstname: any;
  lastname: any;
  userID: any;
  username: any;
  pinisset: boolean = false;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private http: HttpClient, private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.http.get('/assets/json/countries.json').subscribe(data => {
      this.countries = data;
    });
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.data$.subscribe(data => {
      console.log(data);
      //this.accountName = data.user.profile.first_name + " " + data.user.profile.last_name;
      //this.accountNumber = data.user.wallet.account_number;
      //this.accountType = data.user.wallet.account_type;
      //this.balance = data.user.wallet.balance;
      this.country = data.user.profile.country;
      this.currency = data.user.wallet.currency;
      this.email = data.user.email;
      this.firstname = data.user.profile.first_name;
      this.lastname = data.user.profile.last_name;
      this.userID = data.user.profile.id;
      this.username = data.user.username;
    });
  }

  // RESET TRANSFER METHOD
  onResetPassword(passwordData: NgForm) {
    this.spinner.show();

    // A JSON DATA OF THE PASSWORD INPUTS
    let passwordJSONData = {
      current_password: passwordData.value.current_password,
      password: passwordData.value.password,
      password_confirmation: passwordData.value.password_confirmation
    }

    // SEND PASSWORD INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitPasswordService(passwordJSONData).subscribe({
      next: (res) => {
        this.spinner.hide();
        console.log('Reset password response:', res);

        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }
      },
      error: (err) => {
        this.spinner.hide();
        console.error('Reset password error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

  // RESET TRANSFER METHOD
  onResetTransferPin(transferPinData: NgForm) {
    this.spinner.show();

    // A JSON DATA OF THE LOGIN INPUTS
    let transferPinJSONData = {
      pin: transferPinData.value.transferPin,
      pin_confirmation: transferPinData.value.confirmTransferPin
    }

    // SEND PASSWORD INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitTransferPinService(transferPinJSONData).subscribe({
      next: (res) => {
        this.spinner.hide();
        console.log('Reset pin response:', res);

        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }
      },
      error: (err) => {
        this.spinner.hide();
        console.error('Reset pin error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

  // UPDATE PROFILE METHOD
  onUpdateProfile(profileData: NgForm) {
    this.spinner.show();

    // A JSON DATA OF THE PROFILE INPUTS
    let profileJSONData = {
      country: profileData.value.country,
      phone: profileData.value.phone
    }

    // SEND PASSWORD INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitProfileSettingsService(profileJSONData, this.userID).subscribe({
      next: (res) => {
        this.spinner.hide();
        console.log('Profile settings response:', res);

        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }
      },
      error: (err) => {
        this.spinner.hide();
        console.error('Profile settings error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
