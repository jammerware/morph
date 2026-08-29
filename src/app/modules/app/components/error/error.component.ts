import { ChangeDetectionStrategy, Component, ErrorHandler, Inject, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  errorInfo: any = null;

  constructor(@Inject(ErrorHandler) private errorsService: ErrorService) { }

  ngOnInit(): void {
    this.errorInfo = this.errorsService.lastError;
  }
}
