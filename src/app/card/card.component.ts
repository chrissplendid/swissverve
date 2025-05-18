import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QRCodeComponent  } from 'angularx-qrcode';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule, QRCodeComponent, NgxSpinnerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  address: any;
  note: any;
  spend: boolean = true;
  defaultamount = 3000;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) { }

  cardActivation(cardActivationData: NgForm) {
    this.spinner.show();
    cardActivationData.value.amount = this.defaultamount;
    // A JSON DATA OF THE LOGIN INPUTS
      let cardActivationJSONData = {
        amount: cardActivationData.value.amount,
        currency: cardActivationData.value.currency
      }
    if (cardActivationJSONData.currency == 'bank-transfer') {
      this.spinner.hide();
      Swal.fire('Error', 'Service currently unavailable', 'error');
    } else {
      // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
      this.communicatorService.onSubmitDepositService(cardActivationJSONData).subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.status == true) {
            this.spend = false;
            this.address = res.data.address;
            this.note = res.data.note;
          } else {
            this.spinner.hide();
            Swal.fire('Error', 'Error!', 'error');
          }
        },
        error: (err) => {
          this.spinner.hide();
          Swal.fire('Error', err.error.message, 'error');
        }
      })
    }

  }

}
