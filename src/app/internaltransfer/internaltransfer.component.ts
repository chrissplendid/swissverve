import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-internaltransfer',
  imports: [CommonModule, FormsModule],
  templateUrl: './internaltransfer.component.html',
  styleUrl: './internaltransfer.component.css'
})
export class InternaltransferComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  onInternalTransfer(internalTransferData: NgForm) {
    // A JSON DATA OF THE INTERNAL TRANSFER INPUTS
    let internalTransferJSONData = {
     receiversBank: internalTransferData.value.receiversBank,
     receiversAccountNumber: internalTransferData.value.receiversAccountNumber,
     receiversName: internalTransferData.value.receiversName,
     amount: internalTransferData.value.amount,
     description: internalTransferData.value.description,
     transferPin: internalTransferData.value.transferPin
   }
 }

}
