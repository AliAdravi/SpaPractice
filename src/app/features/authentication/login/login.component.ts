import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../../models/auth.model';
import { AuthenticationService } from '../../../services/authentication.service';
import { select, Store } from '@ngrx/store';
import { Login } from '../../../stores/actions/login-action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin!: FormGroup;
  @Output() closeLogin= new EventEmitter<boolean>();
  constructor(private formBuilder: FormBuilder,
    private store: Store) { 
      // store.pipe(select(fromAuth.hasError))
      // .pipe(takeUntil(this.destroyed$))
      // .subscribe({
      //   next: (error: string) => this.showError(error)
      // });
    }
    userName = new FormControl('', Validators.required)
  ngOnInit(): void {
    
    this.createForm();
  }

  createForm(): void {
    this.frmLogin = this.formBuilder.group({
      email: ['ali.adravi@gmail.com', Validators.required],
      password: ['Farhan@101', Validators.required]
    })
  }
  
  login(): void {
    if(!this.frmLogin.valid) return;
    this.store.dispatch(Login({ credential: this.frmLogin.value}))
    this.close(true);
  }

  close = (status: boolean) => this.closeLogin.emit(status);

}
