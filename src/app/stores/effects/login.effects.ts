import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "../../services/authentication.service";
import * as LoginActions from './../actions/login-action';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICredential } from "../../models/auth.model";

@Injectable({ providedIn: 'root' })
export class LoginEffects {
    constructor(private actions$: Actions, 
        private authenticationService: AuthenticationService) { }

        Login$ = createEffect(() => this.actions$.pipe(
            ofType(LoginActions.Login),
            map(action => action.credential),
            switchMap((credential: ICredential) =>
                this.authenticationService.login(credential)
                    .pipe(
                        map(response => 
                            response !== null?
                                LoginActions.Login_Success({user: response}) :
                                LoginActions.Login_Failure({error: 'Invalid user'})
                        ),catchError((err: Error) => 
                            of(LoginActions.Login_Failure({error: err.message}))
                        )
                    )
            )
        ));
}       