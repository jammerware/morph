import { Component, ErrorHandler, Inject, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorInfo: any = null;

  constructor(@Inject(ErrorHandler) private errorsService: ErrorService) { }

  ngOnInit(): void {
    this.errorInfo = this.errorsService.lastError;
    console.log('found in error component:', this.errorsService.lastError);
  }

}
