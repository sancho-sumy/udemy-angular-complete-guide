import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInccerceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    return next.handle(modifiedRequest);
  }
}
