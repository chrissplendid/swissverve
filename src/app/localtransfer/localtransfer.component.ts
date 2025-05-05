import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-localtransfer',
  imports: [CommonModule, FormsModule],
  templateUrl: './localtransfer.component.html',
  styleUrl: './localtransfer.component.css'
})
export class LocaltransferComponent {
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService) {}

  onLocalTransfer(localTransferData: NgForm) {
    // A JSON DATA OF THE LOCAL TRANSFER INPUTS
    let localTransferJSONData = {
     receiversBank: localTransferData.value.receiversBank,
     receiversAccountNumber: localTransferData.value.receiversAccountNumber,
     receiversName: localTransferData.value.receiversName,
     country: localTransferData.value.country,
     sortCode: localTransferData.value.swiftCode,
     branchNumber: localTransferData.value.ibanCode,
     amount: localTransferData.value.amount,
     description: localTransferData.value.description,
     transferPin: localTransferData.value.transferPin
   }
 }


}
