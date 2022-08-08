import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService implements ErrorHandler {
  onError = new Subject<string>();

  handleError(error: any): void {
    this.onError.next(error);
  }
}
