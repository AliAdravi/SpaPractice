import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  basePath = 'https://localhost:44330/api';
  pageSize = 10;  
  headers = new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8'
  });

  constructor() {}
  
}