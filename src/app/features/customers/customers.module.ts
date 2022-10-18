import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddressComponent,
    CustomerContactComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
