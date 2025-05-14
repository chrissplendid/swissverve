import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
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

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.data$.subscribe(data => {
      console.log(data);
      this.accountName = data.user.profile.first_name + " " + data.user.profile.last_name;
      this.accountNumber = data.user.wallet.account_number;
      this.accountType = data.user.wallet.account_type;
      this.balance = data.user.wallet.balance;
      this.country = data.user.profile.country;
      this.currency = data.user.wallet.currency;
      this.email = data.user.email;
      this.username = data.user.username;
    });

    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    /*this.communicatorService.onLoginService().subscribe({
      next: (res) => {
        console.log(res.data);
        if (res.status == true) {
          this.accountNumber = res.data.wallet.account_number;
          this.accountType = res.data.wallet.account_type;
          this.balance = res.data.wallet.balance;
          this.country = res.data.profile.country
          this.currency = res.data.wallet.currency;
          this.email = res.data.email;
          this.firstname = res.data.profile.first_name;
          this.lastname = res.data.profile.last_name;
          this.userID = res.data.id;
          this.username = res.data.username;

        } else {
          alert("Error Getting User Data!");
        }
      },
      error: () => { }
    })*/

  }

}
