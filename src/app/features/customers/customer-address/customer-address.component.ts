import { Component, Input, OnInit } from '@angular/core';
import { IAddress } from '../../../models/customers.model';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {

  constructor() { }
  @Input() addresses!: IAddress[] | undefined;
  ngOnInit(): void {
  }
  updateAddress(id:number) {}
}
