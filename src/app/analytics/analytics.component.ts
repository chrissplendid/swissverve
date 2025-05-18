import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit  } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  accountName: any;
  accountNumber: any;
  balance: any;
  page = 1;
  transactions: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.data$.subscribe(data => {
      console.log(data);
      this.accountName = data.user.profile.first_name + " " + data.user.profile.last_name;
      this.accountNumber = data.user.wallet.account_number;
      this.balance = data.user.wallet.balance;
    });
    /*this.communicatorService.onLoginService().subscribe({
      next: (res) => {
        console.log(res.data);
        if(res.status == true) {
          this.balance = res.data.wallet.balance;
        } else {
          alert("Error Getting User Data!");
        }
      },
      error: () => {}
    })*/

    /* GET TRANSACTIONS DATA */
    this.communicatorService.getTransactionsService().subscribe({
      next: (res) => {
        console.log(res.data.data);
        if(res.data) {
          this.transactions = res.data.data;
        } else {
          alert("Error Getting User Data!");
        }
      },
      error: () => {}
    })
    
  }

}
