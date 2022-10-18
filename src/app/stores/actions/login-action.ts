import { createAction, props } from "@ngrx/store";
import { ICredential, IUser } from "./../../models/auth.model";

export const RestoreState = createAction(
    '[App] Restore',
    props<{user: IUser }>()
)

export const Login = createAction(
    '[Authenticate] Login',
    props<{credential: ICredential }>()
);

export const Login_Success = createAction(
    '[Authenticate] Login Success',
    props<{user: IUser }>()
);
export const Login_Failure = createAction(
    '[Authenticate] Login Failure',
    props<{error: string }>()
);

export const Logout = createAction(
    '[Authentication] Logout'
)