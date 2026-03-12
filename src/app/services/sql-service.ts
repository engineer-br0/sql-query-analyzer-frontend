import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  // Your Render backend URL
  private apiUrl = "https://sql-query-analyzer-jq66.onrender.com/analyze";

  constructor(private http: HttpClient) {}

  analyzeQuery(query: string): Observable<any> {

    const body = {
      query: query
    };

    return this.http.post(this.apiUrl, body);
  }
}