import { Injectable } from '@angular/core';
// import { Http,Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { List } from '../models/list';
// // import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// // import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000/api/employee';

  public getAllLists():Observable<List[]> {

      let URI = `${this.serverApi}/employeelist`;
      return this.http.get(URI)
          .pipe(map((res: Response) => res.json()))
          .pipe(map(res => <List[]>res.lists));
  }

  public deleteList(listId : string) {
    let URI = `${this.serverApi}/employeeid/${listId}`;
      let headers = new Headers;
      headers.append('Content-Type', 'application/json');
      return this.http.delete(URI, {headers})
      .pipe(map((res: Response) => res.json()))
  }

  public addList(list: List) {
    let URI = `${this.serverApi}/employeeadd/`;
    let headers = new Headers;
     let body = JSON.stringify({empid: list.empid, empname: list.empname, mobile: list.mobile,email:list.email,adress:list.adress,department:list.department,experience:list.experience,skill:list.skill});
     console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map((res: Response) => res.json()))
}
}
