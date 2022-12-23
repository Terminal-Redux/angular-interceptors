import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { InterceptorService } from '../interceptors/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(
    private http: HttpClient,
    private interceptorService: InterceptorService
  ) {}

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');

    return this.http.get(`https://reqres23424.in/api/user`, { params }).pipe(
      map((resp: any) => resp['data']),
    );
  }

}
