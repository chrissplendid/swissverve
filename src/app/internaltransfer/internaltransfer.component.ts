import { debounceTime, map, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-internaltransfer',
  imports: [CommonModule, FormsModule, NgxSpinnerModule, ReactiveFormsModule],
  templateUrl: './internaltransfer.component.html',
  styleUrl: './internaltransfer.component.css'
})
export class InternaltransferComponent implements AfterViewInit {
  @ViewChild('accountInput') accountInput!: ElementRef;
  accountName: any;
  receivernumber: any;
  accName: any;
  accountNumber: any;
  amount: any;
  date: any;
  fee: any;
  form: FormGroup;
  transactionid: any;
  transfer: boolean = true;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.form = this.fb.group({
      accountNumber: ['123456789098']
    });
  }

  ngAfterViewInit() {
    fromEvent(this.accountInput.nativeElement, 'keyup').pipe(
      debounceTime(200),
      map(() => this.accountInput.nativeElement.value),
      filter((value: string) => value.length === 12)
    ).subscribe(value => {
      this.sendToServer(value);
    });
  }

  /* ngOnInit(): void {
     this.form.get('accountNumber')?.valueChanges.pipe(
       debounceTime(300), // optional: to prevent spamming
       filter(value => value.length === 12)
     ).subscribe(value => {
       this.sendToServer(value);
     });
   }*/

  sendToServer(value: string) {
    let accountData = {
      type: 'internal', bank: { name: 'Swissverve' }, account: { number: value }
    }
    this.communicatorService.getAccountNameService(accountData).subscribe({
      next: (res) => {
        console.log(res);
        if(res.status == true) {
          this.accountName = res.data.name;
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire('Error', err.error.message, 'error');

      }
    })
    /*this.http.post('https://api.swissverve.com/api/send/bank/resolve', { type: 'internal', bank: { name: 'Swissverve' }, account: { number: value } }).subscribe(response => {
      console.log('Server response:', response);
    });*/
  }

  onInternalTransfer(internalTransferData: NgForm) {
    this.spinner.show();
    // A JSON DATA OF THE INTERNAL TRANSFER INPUTS
    let internalTransferJSONData = {
      type: 'internal', 
      bank: { name: 'Swissverve' }, 
      account: { name: this.accountName, number: internalTransferData.value.accountNumber },
      amount: internalTransferData.value.amount,
      currency: 'chf',
      description: internalTransferData.value.description,
      pin: internalTransferData.value.transferPin
    }

    this.communicatorService.onSubmitInternalTransferService(internalTransferJSONData).subscribe({
      next: (res) => {
        this.spinner.hide();
        Swal.fire('Success', res.message, 'success');
        this.transfer = false;
        this.accName = res.data.wallet.user.profile.first_name + " " + res.data.wallet.user.profile.last_name;
        this.accountNumber = res.data.wallet.account_number;
        this.receivernumber = internalTransferData.value.accountNumber
        this.amount = res.data.amount;
        this.date = res.data.updated_at;
        this.fee = res.data.fee;
        this.transactionid = res.data.id;
      },
      error: (err) => {
        this.spinner.hide();
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
