import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customers.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  
  getCustomers(search: string, page:Number) :Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(
        `${this.basePath}/customer/GetCustomers?search=${search}&page=${page}&pageSize=${this.pageSize}`);
  }

  getCustomerDetail(id: Number) : Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(
      `${this.basePath}/customer/getCustomerById/${id}`);
  }
}
