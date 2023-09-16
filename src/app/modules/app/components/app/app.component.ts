import { Component, ErrorHandler, Inject, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor (
    @Inject(ErrorHandler) private errorService: ErrorService,
    private router: Router,

    private zone: NgZone) { }

  ngOnInit() {
    this.errorService.onError.subscribe(error => {
      // TODO: find out why zone is needed here
      this.zone.run(() => {
        this.router.navigateByUrl('error', { state: { lastError: error } });
      });
    });
  }
}
