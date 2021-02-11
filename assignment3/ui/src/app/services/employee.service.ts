import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:3000/api/payinfo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id:String): Observable<any> {
    return this.http.get(`${baseUrl}/id/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:string, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/id/${id}`, data);
  }

  delete(id:string): Observable<any> {
    return this.http.delete(`${baseUrl}/id/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
 
}
