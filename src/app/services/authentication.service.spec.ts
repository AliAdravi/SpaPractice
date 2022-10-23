import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { flush, TestBed } from '@angular/core/testing';
import { constants } from '../../assets/constants';
import { Auth } from '../../test-data/dummyData';
import { IUser } from '../models/auth.model';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AuthenticationService]
    });
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login with credentisl - POST', () => {
    const dummyResponse = Auth.loginRespone;
    service.login(Auth.credential).subscribe((response: IUser) => {
      expect(response).not.toBeNull();
      expect(response.email).toEqual(Auth.credential.email);
      expect(response.refreshToken).toBe(dummyResponse.refreshToken);
      expect(response.token).toEqual(dummyResponse.token);
    });
    const request = httpMock.expectOne(constants.Urls.authentication.login);
    expect(request.request.method).toBe('POST');
    request.flush(dummyResponse);
  });

  it('should register the user post', () => {
    const user: IUser = { id: 0, email: 'test@gmeil.com', fullName: 'Test User', password: 'DummyPass', status: 1, token: '', refreshToken: ''}
    service.register(user).subscribe((response: IUser) => {
      expect(response).not.toBeNull();
      expect(response.email).toEqual(user.email);
      expect(response.fullName).toEqual(user.fullName);
    });
    const req = httpMock.expectOne(constants.Urls.authentication.register);
    expect(req.request.method).toBe('POST');
    req.flush(user);
  });

});
