import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cryptotransfer',
  imports: [CommonModule, FormsModule],
  templateUrl: './cryptotransfer.component.html',
  styleUrl: './cryptotransfer.component.css'
})
export class CryptotransferComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  onCryptoTransfer(cryptoTransferData: NgForm) {
    // A JSON DATA OF THE CRYPTO TRANSFER INPUTS
    let cryptoTransferJSONData = {
     medium: cryptoTransferData.value.medium,
     walletAddress: cryptoTransferData.value.walletAddress,
     amount: cryptoTransferData.value.amount,
     description: cryptoTransferData.value.description,
     transferPin: cryptoTransferData.value.transferPin
   }
 }


}
