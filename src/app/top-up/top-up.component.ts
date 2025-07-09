import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-up',
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './top-up.component.html',
  styleUrl: './top-up.component.css',
})
export class TopUpComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(
    private communicatorService: CommunicatorService,
    private spinner: NgxSpinnerService
  ) {}

  topUpAccount(topUpData: NgForm) {
    this.spinner.show();
    // A JSON DATA OF THE LOGIN INPUTS
    let topUpJSONData = {
      amount: topUpData.value.amount,
      account_number: topUpData.value.account_number,
    };
    /*this.communicatorService
      .onSubmitTopUpService(topUpJSONData)
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.status == true) {
           Swal.fire('Success', res.message, 'success');
          } else {
            this.spinner.hide();
            Swal.fire('Error', 'Error!', 'error');
          }
        },
        error: (err) => {
          this.spinner.hide();
          Swal.fire('Error', err.error.message, 'error');
        },
      });*/
  }
}
