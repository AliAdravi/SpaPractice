import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './stores/app.state';
import * as LoginAction from './stores/actions/login-action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  constructor(private store: Store<AppState>) {
    if(localStorage.getItem('user')) {
      this.store.dispatch(LoginAction.RestoreState({ user: JSON.parse(localStorage.getItem('user') || '')}))
    }
  }

}
