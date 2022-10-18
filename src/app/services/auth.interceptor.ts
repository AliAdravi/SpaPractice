import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, ErrorObserver, filter, finalize, Observable, Subject, switchMap, take, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // isRefreshingToken = false;
  // tokenSubject?: BehaviorSubject<string | null> | undefined = new BehaviorSubject<string|null>(null);
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private authService: AuthenticationService) {}

  addToken(request: HttpRequest<unknown>, token: string = this.authService.getToken): HttpRequest<unknown> {
    var tokenHeader = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return tokenHeader;
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addToken(request))
    .pipe(catchError((error: HttpErrorResponse) => {
      switch(error.status) {
        case 401:
          return this.handleUnauthorized(request, next);
        default:
          return throwError(() => error);
      }
      
      return throwError(() => error);
    }));
  }

  handleUnauthorized (req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isRefreshingToken) {
        this.isRefreshingToken = true;

        //  Wait for refreshToken call.
        this.tokenSubject?.next('');

        return this.authService.refreshToken()
            .pipe(switchMap((newToken: string) => {
                if (newToken) {
                    this.tokenSubject?.next(newToken);
                    return next.handle(this.addToken(req, newToken));
                }
                this.authService.logout();
                return throwError(() => "Invalid token!");
              }), catchError(error => {
                this.authService.logout();;
                return throwError(() => error);
              }), finalize(() => {
                this.isRefreshingToken = false;
            })
            );
    } else {
        return this.tokenSubject.pipe(
            filter(token => token != null)
            , take(1)
            , switchMap(token => {
                return next.handle(this.addToken(req));
            })
        );
    }
}
}
