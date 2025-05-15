import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  address: any;
  note: any;
  spend: boolean = true;
  defaultamount = 3000;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  cardActivation(cardActivationData: NgForm) {
     // A JSON DATA OF THE LOGIN INPUTS
     let cardActivationJSONData = {
      amount: cardActivationData.value.amount,
      currency: cardActivationData.value.currency
    }
    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitDepositService(cardActivationJSONData).subscribe({
      next: (res) => {
        if(res.status == true) {
          this.spend = false;
          this.address = res.data.address;
          this.note = res.data.note;
        } else {
          alert("Error!")
        }
      },
      error: (err) => {
        Swal.fire('Error', err.error.message, 'error');
      }
    })
  }

}
