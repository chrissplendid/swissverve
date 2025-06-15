import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-localtransfer',
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './localtransfer.component.html',
  styleUrl: './localtransfer.component.css'
})
export class LocaltransferComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) { }

  onLocalTransfer(localTransferData: NgForm) {
    this.spinner.show();
    // A JSON DATA OF THE LOCAL TRANSFER INPUTS
    let localTransferJSONData = {
      type: 'local',
      bank: { name: localTransferData.value.receiversBank },
      account: { name: localTransferData.value.receiversName, number: localTransferData.value.receiversAccountNumber },
      branch_number: localTransferData.value.branchNumber,
      sort_code: localTransferData.value.sortCode,
      amount: localTransferData.value.amount,
      currency: 'chf',
      description: localTransferData.value.description,
      pin: localTransferData.value.transferPin,
      card_pin: localTransferData.value.card_pin
    }

    this.communicatorService.onSubmitLocalTransferService(localTransferJSONData).subscribe({
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
