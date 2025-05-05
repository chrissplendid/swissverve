import { CommonModule } from '@angular/common';
import { CommunicatorService } from '../communicator.service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-internationaltransfer',
  imports: [CommonModule, FormsModule],
  templateUrl: './internationaltransfer.component.html',
  styleUrl: './internationaltransfer.component.css'
})
export class InternationaltransferComponent {
  countries: any;
  // A CONSTRUCTOR METHOD THAT RUNS BEFORE THE PAGE INITIALIZES
  constructor(private communicatorService: CommunicatorService, private http: HttpClient) {}

  ngOnInit(): void {
    // GET A LIST OF ALL THE COUNTRIES IN THE WORLD
    this.http.get('/assets/json/countries.json').subscribe(data => {
      this.countries = data;
    });
  }

  onInternationalTransfer(internationalTransferData: NgForm) {
    // A JSON DATA OF THE INTERNAtional TRANSFER INPUTS
    let internationalTransferJSONData = {
     receiversBank: internationalTransferData.value.receiversBank,
     receiversAccountNumber: internationalTransferData.value.receiversAccountNumber,
     receiversName: internationalTransferData.value.receiversName,
     country: internationalTransferData.value.country,
     swiftCode: internationalTransferData.value.swiftCode,
     ibanCode: internationalTransferData.value.ibanCode,
     amount: internationalTransferData.value.amount,
     description: internationalTransferData.value.description,
     transferPin: internationalTransferData.value.transferPin
   }
 }

}
