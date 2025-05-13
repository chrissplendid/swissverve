import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private readonly BASE_URL = 'https://api.swissverve.com/api';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  private getToken(): string {
    return this.cookieService.get('userToken') || '';
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  private getData<T>(url: string, skipAuth = false): Observable<T> {
    const headers = skipAuth ? new HttpHeaders({ 'Content-Type': 'application/json' }) : this.getAuthHeaders();
    return this.http.get<T>(url, { headers });
  }

  private postData<T>(url: string, body: any, skipAuth = false): Observable<T> {
    const headers = skipAuth ? new HttpHeaders({ 'Content-Type': 'application/json' }) : this.getAuthHeaders();
    return this.http.post<T>(url, body, { headers });
  }


  getTransactionsService(): Observable<any> {
    return this.getData<any>(`${this.BASE_URL}/transactions`);
  }

  onLoginService(): Observable<any> {
    return this.getData<any>(`${this.BASE_URL}/auth`);
  }

  onSubmitDepositService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/receive/crypto`, formInputs);
  }

  onSubmitLoginService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/auth/login`, formInputs, true);
  }

  onSubmitRegisterService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/auth/register`, formInputs, true);
  }
}
