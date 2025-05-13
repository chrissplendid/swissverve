import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
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
    this.communicatorService.onLoginService().subscribe({
      next: (res) => {
        console.log(res.data);
        if (res.status == true) {
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
    })

  }

}
