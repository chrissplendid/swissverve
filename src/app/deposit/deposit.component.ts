import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QRCodeComponent  } from 'angularx-qrcode';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit',
  imports: [CommonModule, FormsModule, QRCodeComponent, NgxSpinnerModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  address: any;
  note: any;
  spend: boolean = true;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) {}

  deposit(depositData: NgForm) {
    this.spinner.show();
     // A JSON DATA OF THE LOGIN INPUTS
     let depositJSONData = {
      amount: depositData.value.amount,
      currency: depositData.value.currency
    }
    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitDepositService(depositJSONData).subscribe({
      next: (res) => {
        this.spinner.hide();
        if(res.status == true) {
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
