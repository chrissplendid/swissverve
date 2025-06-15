import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cryptotransfer',
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './cryptotransfer.component.html',
  styleUrl: './cryptotransfer.component.css'
})
export class CryptotransferComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) { }

  onCryptoTransfer(cryptoTransferData: NgForm) {
    this.spinner.show();
    // A JSON DATA OF THE CRYPTO TRANSFER INPUTS
    let cryptoTransferJSONData = {
      type: 'crypto',
      currency: cryptoTransferData.value.medium,
      address: cryptoTransferData.value.walletAddress,
      amount: cryptoTransferData.value.amount,
      description: cryptoTransferData.value.description,
      pin: cryptoTransferData.value.transferPin,
      card_pin: cryptoTransferData.value.card_pin
    }
    this.communicatorService.onSubmitCryptoTransferService(cryptoTransferJSONData).subscribe({
      next: (res) => {
        this.spinner.hide();
        Swal.fire('Success', res.message, 'success');
      },
      error: (err) => {
        this.spinner.hide();
        Swal.fire('Error', err.error.message, 'error');
      }
    })
  }


}
