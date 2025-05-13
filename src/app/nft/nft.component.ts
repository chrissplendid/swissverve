import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nft',
  imports: [],
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.css'
})
export class NftComponent {
  showAlert() {
    Swal.fire({
      title: 'Alert',
      text: 'Access to this feature is currently unavailable for your account.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

}
