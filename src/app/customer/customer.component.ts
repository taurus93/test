import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private listCustomer;
  constructor(private customerService: CustomerService) { }

  loadAllCustomers() {
    this.customerService
      .getAllCustomers()
      .then(data => {
        this.listCustomer = data;
        console.log(this.listCustomer);
      });
  }

  ngOnInit() {
    this.loadAllCustomers();
  }

}