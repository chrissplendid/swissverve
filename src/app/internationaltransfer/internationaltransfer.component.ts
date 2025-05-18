import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-internationaltransfer',
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './internationaltransfer.component.html',
  styleUrl: './internationaltransfer.component.css'
})
export class InternationaltransferComponent {
  countries: any;
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // GET A LIST OF ALL THE COUNTRIES IN THE WORLD
    this.http.get('/assets/json/countries.json').subscribe(data => {
      this.countries = data;
    });
  }

  onInternationalTransfer(internationalTransferData: NgForm) {
    this.spinner.show();
    // A JSON DATA OF THE INTERNATIONAL TRANSFER INPUTS
    let internationalTransferJSONData = {
      type: 'international',
      bank: { name: internationalTransferData.value.receiversBank, address: { country:
        internationalTransferData.value.country
      } },
      account: { name: internationalTransferData.value.receiversName, number: internationalTransferData.value.receiversAccountNumber },
      swift_code: internationalTransferData.value.swiftCode,
      iban_code: internationalTransferData.value.ibanCode,
      amount: internationalTransferData.value.amount,
      currency: 'chf',
      description: internationalTransferData.value.description,
      pin: internationalTransferData.value.transferPin
    }

    this.communicatorService.onSubmitInternationalTransferService(internationalTransferJSONData).subscribe({
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
