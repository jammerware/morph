import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService implements ErrorHandler {
  lastError: any = null;
  onError = new Subject<string>();

  handleError(error: any): void {
    this.lastError = error;
    this.onError.next(error);
  }
}
