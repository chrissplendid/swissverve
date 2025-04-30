import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-deposit',
  imports: [FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  response: any[] = [];
  deposit(depositData: NgForm) {
     // A JSON DATA OF THE LOGIN INPUTS
     let depositJSONData = {
      amount: depositData.value.amount,
      currency: depositData.value.currency
    }
    alert("...")
    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitDepositService(depositJSONData).subscribe({
      next: (res) => {
        this.response = res;
        console.log(res)
      },
      error: () => {}
    })
  }

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

}
