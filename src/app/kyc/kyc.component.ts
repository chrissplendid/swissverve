import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kyc',
  imports: [CommonModule, FormsModule],
  templateUrl: './kyc.component.html',
  styleUrl: './kyc.component.css'
})
export class KycComponent implements OnInit {
  formData = {
    type: '',
    number: '',
  };

  is_kyc_submitted: boolean = false;

  selectedFile: File | null = null;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    /* GET LOGGED IN USER DATA FROM THE SERVER THROUGH A SERVICE METHOD */
    this.communicatorService.data$.subscribe(data => {
       this.is_kyc_submitted = data.user.profile.is_kyc_submitted;
    });

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // KYC METHOD
  kyc() {
    if (!this.selectedFile) {
      alert('Please select a file.');
      return;
    }

    // FORM DATA
    const formData  = new FormData();
    formData.append('type', this.formData.type);
    formData.append('number', this.formData.number);
    formData.append('document', this.selectedFile);

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitKYCService(formData).subscribe({
      next: (res) => {
        if (res?.message) {
          Swal.fire('Success', res.message, 'success');
        }
      },
      error: (err) => {
        console.error('KYC error:', err);
        Swal.fire('Error', err.error.message, 'error');
      }
    })

  }

}
