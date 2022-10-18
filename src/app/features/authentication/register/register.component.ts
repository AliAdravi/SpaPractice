import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../models/auth.model';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  frmRegister!: FormGroup;
  user!: IUser;
  @Output() closeModel = new EventEmitter<boolean>();
  
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.frmRegister = this.formBuilder.group({
      id: [0],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      status: [0]
    })
  }

  register(): void {
    if(!this.frmRegister.valid) return;
    this.authenticationService.register(this.frmRegister.value).subscribe((response: IUser) =>{
      this.user = response;
    })

  }

  close = (status: boolean) => this.closeModel.emit(status);
}
