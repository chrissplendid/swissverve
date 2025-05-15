import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kyc',
  imports: [FormsModule],
  templateUrl: './kyc.component.html',
  styleUrl: './kyc.component.css'
})
export class KycComponent {
  formData = {
    id_medium: '',
    id_number: ''
  };

  selectedFile: File | null = null;

  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) { }

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
    const form = new FormData();
    form.append('type', this.formData.id_medium);
    form.append('number', this.formData.id_number);
    form.append('document', this.selectedFile);

    // SEND LOGIN INPUTS TO THE SERVER THROUGH A SERVICE METHOD
    this.communicatorService.onSubmitKYCService(form).subscribe({
      next: (res) => {
        console.log('KYC response:', res);

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
