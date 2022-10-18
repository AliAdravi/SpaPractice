import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
    { path: 'detail', component: CustomerDetailComponent },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: CustomerListComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
