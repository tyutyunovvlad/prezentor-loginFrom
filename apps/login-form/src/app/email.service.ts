import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, iif } from 'rxjs';
import { mergeMap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class EmailService {

  constructor(private http: HttpClient) {}

  true$ = of('true');
  false$ = of('false');

  getEmail(email:string): Observable<string> {
      return this.http.get<string>(`http://localhost:3000/mails?email=${email}`)
        .pipe(
          // tap(r => console.log(JSON.stringify(r))),
          mergeMap(r => iif(() => JSON.stringify(r) === '[]', this.false$, this.true$ ))          
        )
  }
}