import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, iif } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class EmailService {

  constructor(private http: HttpClient) {}

  getEmail(email:string): Observable<string> {
      return this.http.get<any>(`http://localhost:3000/mails/${email}`)
        .pipe(
          // tap(r => console.log(r.exist)),
          mergeMap(r => iif(() => r.exist, of('true'), of('false') ))          
        )
  }

  addEmail(email:string): Observable<object> {

    return this.http.post(`http://localhost:3000/mails/`, {email}  )
      
  }

}