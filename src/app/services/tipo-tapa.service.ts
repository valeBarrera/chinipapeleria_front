import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root',
})
export class TipoTapaService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = global.url;
  }

  all(): Observable<any> {
    let urlfinal = this.url + 'tipoTapa/all';
    return this.http.post(urlfinal, {}, {});
  }
}
