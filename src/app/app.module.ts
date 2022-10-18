import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/authentication/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { LeftNavComponent } from './features/shared/left-nav/left-nav.component';
import { TopNavComponent } from './features/shared/top-nav/top-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './features/authentication/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './stores/reducers/login-reducers';
import { LoginEffects } from './stores/effects/login.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LeftNavComponent,
    HttpClientModule,
    StoreModule.forRoot({login: LoginReducer}),
    EffectsModule.forRoot([LoginEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
