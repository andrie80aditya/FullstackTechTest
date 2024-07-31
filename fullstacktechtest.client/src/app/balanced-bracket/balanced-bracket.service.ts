import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalancedBracketService {
  private apiUrl = 'https://localhost:7088/api/balancedbracket';

  constructor(private http: HttpClient) { }

  //checkBalancedBrackets(input: string): Observable<string> {
  //  return this.http.post(this.apiUrl, input, { responseType: 'text' });
  //}

  checkBalancedBrackets(input: string): Observable<string> {
    const request = { input };
    return this.http.post(this.apiUrl, request, { responseType: 'text' });
  }

  //checkBalancedBrackets(input: string): Observable<string> {
  //  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //  return this.http.post(this.apiUrl, { input }, { headers, responseType: 'text' });
  //}
}
