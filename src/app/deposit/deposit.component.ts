import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  address: any;
  note: any;
  spend: boolean = true;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

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
        if(res.status == true) {
          this.spend = false;
          this.address = res.data.address;
          this.note = res.data.note;
        } else {
          alert("Error!")
        }
      },
      error: () => {}
    })
  }


}
