import { fakeAsync, TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from '../../test-data/dummyData';
import { constants } from '../../assets/constants';
import { ICustomer } from '../models/customers.model';
import { METHODS } from 'http';


describe('CustomerService', () => {
  let customerService: CustomerService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CustomerService]
    });
    customerService = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(customerService).toBeTruthy();
  });

  it('should search customers - POST', () => {
    const searchResult = Customer.list;
    customerService.getCustomers('a', 1).subscribe( (response:ICustomer[]) => {
      expect(response.length).toEqual(10);
      expect(response[0].firstName).toEqual(searchResult[0].firstName);
      expect(response[0].lastName).toEqual(searchResult[0].lastName);
    });
    const request = httpMock.expectOne(constants.Urls.customer.searh);
    expect(request.request.method).toBe('POST');
    request.flush(searchResult);
  });
  
  it('should get customer detail - GET', () => {
    const customerDetail = Customer.detail;
    const id = 4100;
    customerService.getCustomerDetail(id).subscribe((detail: ICustomer) => {
      expect(detail).not.toBeNull();
      expect(detail.customerId).toEqual(id);
      expect(detail.addresses).toEqual(customerDetail.addresses);
      expect(detail.addresses.length).toEqual(1);
      expect(detail.contacts.length).toEqual(1);

    });
    const request = httpMock.expectOne(`${constants.Urls.customer.byId}/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(customerDetail);
  })
});
