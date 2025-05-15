import { debounceTime, map, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-internaltransfer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './internaltransfer.component.html',
  styleUrl: './internaltransfer.component.css'
})
export class InternaltransferComponent implements AfterViewInit {
  @ViewChild('accountInput') accountInput!: ElementRef;
  accountName: any;
  form: FormGroup;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private fb: FormBuilder, private http: HttpClient) {
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
        console.log(res);
        Swal.fire('Success', res.message, 'success');
      },
      error: (err) => {
        console.log('Transfer error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
