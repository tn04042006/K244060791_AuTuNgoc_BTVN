import { Component } from '@angular/core';
import { CustomerHttpService18 } from '../services/customer-http-service18';

@Component({
  selector: 'app-customer-service-http-error-component',
  standalone: false,
  styleUrl: './customer-service-http-error-component.css',
  templateUrl: './customer-service-http-error-component.html',
})
export class CustomerServiceHttpErrorComponent {
  customerTypes: any;
    errMessage: string = '';
  
    constructor(_service: CustomerHttpService18) {
      _service.getCustomersHandleError().subscribe({
        next: (data) => { this.customerTypes = data; },
        error: (err) => { this.errMessage = err.message || err; }
      });
    }
}
