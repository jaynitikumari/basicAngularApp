import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http:HttpClient) { }

  employees(){
    return this.http.get('https://5f2a9ccd6ae5cc0016422c7b.mockapi.io/getEmployees')
  }
}
