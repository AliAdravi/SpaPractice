import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICustomer } from '../../../models/customers.model';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  
  detail!: ICustomer;
  id!: Number;
  // @Input() set customerId(value: number);
  @Input() set customerId(value: Number) {
     this.id = value;
     this.getCustomerDetail();
 }
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetail();
  }

  getCustomerDetail (): void {
    if(!this.id) return;
    this.customerService.getCustomerDetail(this.id).subscribe(
      (response: ICustomer) => {
        this.detail = response;
      });
  }

}
