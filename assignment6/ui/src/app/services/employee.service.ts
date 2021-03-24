import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};



const baseUrl = 'http://localhost:3000/api/payinfo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl, httpOptions);
  }

  get(id:String): Observable<any> {
    return this.http.get(`${baseUrl}/id/${id}`, httpOptions);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data, httpOptions);
  }

  update(id:string, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/id/${id}`, data,httpOptions);
  }

  delete(id:string): Observable<any> {
    return this.http.delete(`${baseUrl}/id/${id}`,httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl,httpOptions);
  }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
 
}
