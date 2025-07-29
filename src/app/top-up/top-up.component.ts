import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { CommunicatorService } from '../communicator.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-up',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './top-up.component.html',
  styleUrl: './top-up.component.css',
})
export class TopUpComponent implements AfterViewInit, OnInit {
  @ViewChild('accountInput') accountInput!: ElementRef;

  accountName: string = '';

  constructor(
    private communicatorService: CommunicatorService,
    private spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.accountName = '';
  }

  ngAfterViewInit(): void {
    if (!this.accountInput) return;

    fromEvent(this.accountInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        map(() => this.accountInput.nativeElement.value),
        filter((value: string) => value.length === 12)
      )
      .subscribe((value: string) => {
        this.sendToServer(value);
      });
  }

  sendToServer(accountNumber: string): void {
    const accountData = {
      account: { number: accountNumber },
    };

    this.communicatorService.getTopUpAccountNameService(accountData).subscribe({
      next: (res) => {
        console.log('Response:', res);
        if (res.status === true && res.data?.account.name) {
          this.accountName = res.data.account.name;
          this.cdr.detectChanges(); // Force view update if needed
        } else {
          this.accountName = '';
          Swal.fire('Notice', 'Account name could not be resolved.', 'info');
        }
      },
      error: (err) => {
        console.error('Error:', err);
        this.accountName = '';
        Swal.fire('Error', err.error?.message || 'Unable to resolve account.', 'error');
      },
    });
  }

  topUpAccount(form: NgForm): void {
    if (form.invalid) return;

    const topUpData = {
      account: {
        name: this.accountName,
        number: form.value.number,
      },
      amount: form.value.amount,
      description: form.value.description,
      pin: form.value.pin,
    };

    this.spinner.show();

    this.communicatorService.onSubmitTopUpService(topUpData).subscribe({
      next: (res) => {
        this.spinner.hide();
        if (res.status === true) {
          Swal.fire('Success', res.message, 'success');
        } else {
          Swal.fire('Error', res.message || 'Transaction failed.', 'error');
        }
      },
      error: (err) => {
        this.spinner.hide();
        Swal.fire('Error', err.error?.message || 'An error occurred.', 'error');
      },
    });
  }
}
