
import { createReducer, on, createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "../../models/auth.model";
import * as LoginAction from './../actions/login-action';

export interface ILoginState {
    isAuthenticated: boolean;
    token: string;
    refreshToken: string;
    user: IUser | null;
    error: string;
    isLoading: boolean;
}

export const initialState: ILoginState = {
    isAuthenticated: false,
    token: '',
    refreshToken: '',
    user: null,
    error: '',
    isLoading: false
}

export const LoginReducer = createReducer (
    initialState,

    on(LoginAction.RestoreState, (state: ILoginState, payload: any) => ({
        ...state,
        isLoading: false,
        token: payload.user.token,
        refreshToken: payload.user.refreshToken,
        error: payload.error,
        user: payload.user,
        isAuthenticated: true
    })),
    on(LoginAction.Login, (state: ILoginState, payload: any) => ({
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: null,
        error: '',
        token: '',
        refreshToken: ''
    })),
    on(LoginAction.Login_Success, (state: ILoginState, payload: any) => ({
        
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload.user,
        token: payload.user.token,
        refreshToken: payload.user.refreshToken,
        error: ''
    })),
    on(LoginAction.Login_Failure, (state: ILoginState, payload: any) => ({
        ...state,
        isLoading: false,
        token: '',
        refreshToken:'',
        user: null,
        error: payload.error
    })),
    on(LoginAction.Logout, (state: ILoginState) => ({
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        token: '',
        refreshToken: '',
        error: ''
    }))
);

const getAuthenticationrFeatureState = createFeatureSelector<ILoginState>('login');
export const getState = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) => state
)
export const getUser = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) => state.user
)
export const getToken = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) => state.token
)
export const  isLoading = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) => state.isLoading
)
export const  isAuthenticated = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) => state.isAuthenticated
)
export const  hasError = createSelector(
    getAuthenticationrFeatureState,
    (state:ILoginState) =>  state?.error
)
