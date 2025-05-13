import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stocks',
  imports: [],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  showAlert() {
      Swal.fire({
        title: 'Alert',
        text: 'Access to this feature is currently unavailable for your account.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

}
