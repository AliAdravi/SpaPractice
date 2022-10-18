import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'customers',
    title: 'Customers',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./features/customers/customers.module')
      .then(m=> m.CustomersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent, title: 'Home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
