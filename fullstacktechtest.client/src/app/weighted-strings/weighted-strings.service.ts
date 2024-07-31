import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightedStringsService {
  private apiUrl = 'https://localhost:7088/api/weightedstrings';

  constructor(private http: HttpClient) { }

  getWeightedStringsResult(inputString: string, queries: number[]): Observable<string[]> {
    const request = { inputString, queries };
    return this.http.post<string[]>(this.apiUrl, request);
  }
}
