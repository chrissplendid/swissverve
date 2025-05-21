import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  imports: [CommonModule, NgxPaginationModule, NgxSpinnerModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  page = 1;
  users: any;
  user: boolean = true;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /* GET TRANSACTIONS DATA */
    this.spinner.show();
    this.communicatorService.getProfilesService().subscribe({
      next: (res) => {
        this.spinner.show();
        // console.log(res.data.data);
        if (res.data) {
          this.users = res.data.data;
        } else {
          this.spinner.show();
          Swal.fire('Error', 'Error getting user data', 'error');
        }
      },
      error: (err) => {
        console.log(err);
        this.spinner.show();
      }
    })
  }

  approve(profileID: any) {
    this.spinner.show();
    let approveJSONData = {
      status: "verified"
    }

    this.communicatorService.onKYCUpdateService(approveJSONData, profileID).subscribe({
      next: (res) => {
        this.spinner.show();
        // console.log(res.data.data);
        if (res.status == true) {
          Swal.fire('Success', res.message, 'success');
        } else {
          Swal.fire('Error', 'KYC approval error', 'error');
        }
      },
      error: (err) => {
        this.spinner.show();
        Swal.fire('Error', err.error.message, 'error');
      }
    })
  }

  reject(profileID: any) {
    this.spinner.show();
    let rejectJSONData = {
      status: "failed"
    }

    this.communicatorService.onKYCUpdateService(rejectJSONData, profileID).subscribe({
      next: (res) => {
        this.spinner.show();
        // console.log(res.data.data);
        if (res.status == true) {
          Swal.fire('Success', res.message, 'success');
        } else {
          Swal.fire('Error', 'KYC reject error', 'error');
        }
      },
      error: (err) => {
        Swal.fire('Error', err.error.message, 'error');
      }
    })
  }


}
