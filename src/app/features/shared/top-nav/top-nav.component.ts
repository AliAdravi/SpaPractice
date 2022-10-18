import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IUser } from '../../../models/auth.model';
import { AuthenticationService } from '../../../services/authentication.service';
import { LoginComponent } from '../../authentication/login/login.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../stores/app.state';
import * as LoginReducer from './../../../stores/reducers/login-reducers';
import * as LoginActions from './../../../stores/actions/login-action';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  
  user!: IUser | null;
  isAuthenticated: boolean = false;
  @ViewChild('loginModal', {static: true, read: ViewContainerRef}) 
    loginContainer!: ViewContainerRef; 
  
  constructor(private authenticationService: AuthenticationService,
    private changeDetectRef: ChangeDetectorRef,
    private store: Store<AppState>,) { }


  ngOnInit(): void {
    this.store.pipe(select(LoginReducer.isAuthenticated))
      .subscribe(status => this.isAuthenticated = status);

    this.store.pipe(select(LoginReducer.getUser))
      .subscribe(user => this.user = user);
    this.user = this.authenticationService.getUser;
  }

  login(): void {
     var comp = this.loginContainer.createComponent(LoginComponent);
     comp.instance.closeLogin.subscribe(status => {
      if(status){
        this.user = this.authenticationService.getUser;
        this.changeDetectRef.markForCheck();
      }
      comp.destroy();
     })
  }
  register(): void {
    var comp = this.loginContainer.createComponent(RegisterComponent);
    comp.instance.closeModel.subscribe(status => {
     if(status){

     }
     comp.destroy();
    })
  }

  logout() :void {
    this.store.dispatch(LoginActions.Logout());
    this.authenticationService.logout();
    this.user = null;
  }
}
