import { ChangeDetectionStrategy, Component, ErrorHandler, OnInit, inject } from '@angular/core';
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
  private errorsService = inject(ErrorHandler) as ErrorService;

  errorInfo: any = null;

  ngOnInit(): void {
    this.errorInfo = this.errorsService.lastError;
  }
}
