import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsettings',
  imports: [CommonModule, FormsModule],
  templateUrl: './accountsettings.component.html',
  styleUrl: './accountsettings.component.css'
})
export class AccountsettingsComponent implements OnInit {
  accountNumber: any;
  accountName: any;
  accountType: any;
  balance: any;
  country: any;
  currency: any;
  email: any;
  firstname: any;
  lastname: any;
  userID: any;
  username: any;
  pinisset: boolean = false;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
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
      this.username = data.user.username;
    });
  }

  // RESET TRANSFER METHOD
  onResetTransferPin(transferPinData: NgForm) {

    // A JSON DATA OF THE LOGIN INPUTS
    let transferPinJSONData = {
      pin: transferPinData.value.transferPin,
      pin_confirmation: transferPinData.value.confirmTransferPin
    }

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitTransferPinService(transferPinJSONData).subscribe({
      next: (res) => {
        console.log('Reset pin response:', res);

        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }
      },
      error: (err) => {
        console.error('Reset pin error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
