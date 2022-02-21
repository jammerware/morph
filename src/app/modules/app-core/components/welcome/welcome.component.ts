import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { WelcomeDialogComponent } from '../welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private matDialogService: MatDialog) { }

  ngOnInit(): void {
    if (!this.cookieService.get('isWelcomed')) {
      this.matDialogService.open(WelcomeDialogComponent);
      this.cookieService.set('isWelcomed', 'true');
    }
  }

}
