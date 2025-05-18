import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private data = new BehaviorSubject<any>(null);
  data$ = this.data.asObservable();

  setData(value: any) {
    this.data.next(value);
  }

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

  private patchData<T>(url: string, body: any, skipAuth = false): Observable<T> {
    const headers = skipAuth ? new HttpHeaders({ 'Content-Type': 'application/json' }) : this.getAuthHeaders();
    return this.http.patch<T>(url, body, { headers });
  }


  getAccountNameService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/send/bank/resolve`, formInputs);
  }

  getTransactionsService(): Observable<any> {
    return this.getData<any>(`${this.BASE_URL}/transactions`);
  }

  onApproveService(formInputs: any, id: any): Observable<any> {
    return this.patchData<any>(`${this.BASE_URL}/transactions/`+id, formInputs);
  }

  onLoginService(): Observable<any> {
    return this.getData<any>(`${this.BASE_URL}/auth`);
  }

  onSubmitCryptoTransferService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/send/crypto`, formInputs);
  }

  onSubmitDepositService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/receive/crypto`, formInputs);
  }

  onSubmitInternalTransferService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/send/bank`, formInputs);
  }

  onSubmitInternationalTransferService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/send/bank`, formInputs);
  }

  onSubmitKYCService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/kyc/biometric`, formInputs);
  }

   onSubmitLocalTransferService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/send/bank`, formInputs);
  }

  onSubmitLoginService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/auth/login`, formInputs, true);
  }

  onSubmitPasswordService(formInputs: any): Observable<any> {
    return this.patchData<any>(`${this.BASE_URL}/settings/password`, formInputs);
  }

  onSubmitProfileSettingsService(formInputs: any, id: any): Observable<any> {
    return this.patchData<any>(`${this.BASE_URL}/profiles/`+id, formInputs);
  }

  onSubmitRegisterService(formInputs: any): Observable<any> {
    return this.postData<any>(`${this.BASE_URL}/auth/register`, formInputs, true);
  }

  onSubmitTransferPinService(formInputs: any): Observable<any> {
    return this.patchData<any>(`${this.BASE_URL}/settings/pin`, formInputs);
  }
}
