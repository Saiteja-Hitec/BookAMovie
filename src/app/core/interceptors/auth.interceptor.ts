import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { LogService } from 'src/app/shared/services/logger.service';

export const findRange = (num, min, max) => {
  return num >= min && num <= max;
};
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar, private logService: LogService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = request.clone({
      setHeaders: { 'Content-type': 'application/json' }
    });
    return next.handle(modified).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        const config = new MatSnackBarConfig();
        config.duration = 4000;
        config.horizontalPosition = 'right';
        config.verticalPosition = 'top';
        if (findRange(error.status, 400, 500)) {
          this.snackBar.open('Invalid Request/Response Formats', 'close', config);
        } else if (error.status === 0) {
          this.snackBar.open('Unknown URL/ Wrong Request', 'close', config);
        }
        this.logService.error(error.statusText);
        return throwError(error);
      })
    );
  }
}
