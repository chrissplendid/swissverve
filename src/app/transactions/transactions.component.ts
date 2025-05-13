import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  transactions: any;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {

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
