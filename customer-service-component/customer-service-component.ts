import { Component } from '@angular/core';
import { CustomerService18 } from '../services/customer-service18';

@Component({
  selector: 'app-customer-service-component',
  standalone: false,
  styleUrl: './customer-service-component.css',
  templateUrl: './customer-service-component.html',
})
export class CustomerServiceComponent {
  customerTypes: any;

  constructor(private cusService: CustomerService18) {
    this.customerTypes = this.cusService.getCustomers();
  }
}
