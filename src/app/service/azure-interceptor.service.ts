import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable()
export class AzureInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.API_KEY
      })
    });
    return next.handle(modifiedReq);
  }
}
