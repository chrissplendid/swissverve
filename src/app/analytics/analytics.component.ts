import { CommunicatorService } from '../communicator.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  balance: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.onLoginService().subscribe({
      next: (res) => {
        console.log(res.data);
        if(res.status == true) {
          this.balance = res.data.wallet.balance;
        } else {
          alert("Error Getting User Data!");
        }
      },
      error: () => {}
    })
    
  }

}
