import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor(private http: HttpClient) { }

  onSubmitLoginService(formInputs: any):Observable<any> {
    return this.http.post<any>("https://api.swissverve.com/api/auth/login", formInputs)
  }
}
