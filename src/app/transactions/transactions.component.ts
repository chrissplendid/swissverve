import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, NgxPaginationModule, NgxSpinnerModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  page = 1;
  transactions: any;
  user: boolean = true;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /* VALIDATE USER RIGHTS */
    this.communicatorService.data$.subscribe(data => {
      //console.log(data);
      if(data.user.access.includes('admin')) {
        this.user = false;
      } else {
        this.user = true;
      }
    });

    /* GET TRANSACTIONS DATA */
    this.communicatorService.getTransactionsService().subscribe({
      next: (res) => {
       // console.log(res.data.data);
        if (res.data) {
          this.transactions = res.data.data;
        } else {
          Swal.fire('Error', 'Error getting user data', 'error');
        }
      },
      error: () => { }
    })

  }

  /* APPROVE TRANSACTION (ADMIN ONLY) */
  approve(transactionID: any) {
    //Swal.fire('Success', transactionID, 'success');
    let approveJSONData = {
      status: "confirmed"
    }

    this.communicatorService.onApproveService(approveJSONData, transactionID).subscribe({
      next: (res) => {
       // console.log(res.data.data);
        if (res.status == true) {
          Swal.fire('Success', res.message, 'success');
        } else {
          Swal.fire('Error', 'Transaction approval error', 'error');
        }
      },
      error: (err) => { 
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

  /* DECLINE TRANSACTION (ADMIN ONLY) */
  decline(transactionID: any) {
    //Swal.fire('Success', transactionID, 'success');
    let approveJSONData = {
      status: "failed"
    }

    this.communicatorService.onApproveService(approveJSONData, transactionID).subscribe({
      next: (res) => {
       // console.log(res.data.data);
        if (res.status == true) {
          Swal.fire('Success', res.message, 'success');
        } else {
          Swal.fire('Error', 'Transaction decline error', 'error');
        }
      },
      error: (err) => { 
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
