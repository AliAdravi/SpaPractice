import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ICustomer } from '../models/customers.model';
import { constants } from './../../assets/constants';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  
  getCustomers(search: string, page:Number) :Observable<ICustomer[]> {
    const body = {
      "search": "a",
      "page": 1,
      "pageSize": 10
    };
    return this.httpClient.post<ICustomer[]>(constants.Urls.customer.searh, body);
  }

  getCustomerDetail(id: Number) : Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(`${constants.Urls.customer.byId}/${id}`);
  }


}

