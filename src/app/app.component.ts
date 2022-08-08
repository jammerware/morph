import { Component, ErrorHandler, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from './services/error.service';
import { VersionService } from './services/version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  appVersion: string;

  constructor(
    @Inject(ErrorHandler) private errorService: ErrorService,
    private snackbar: MatSnackBar,
    private versionService: VersionService) { }

  ngOnInit() { 
    this.appVersion = this.versionService.get();

    this.errorService.onError.subscribe(error => {
      this.snackbar.open(`Error: ${error}`, "OK");
    });
  }
}
