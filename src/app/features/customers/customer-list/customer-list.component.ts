import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../models/customers.model';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers!: ICustomer[];
  id!: Number;
  search: string = 'a';
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers(this.search || '', 1).subscribe(
      (response: ICustomer[]) => {
        this.id = 0;
        this.customers = response;
        if(this.customers && this.customers.length > 0)
          this.id = this.customers[0].customerId;
      }
    )
  }

  loadDetail = (id: Number) => {
    this.id = id;
  }
}
