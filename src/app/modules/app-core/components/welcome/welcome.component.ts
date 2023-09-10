import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { CookieService } from 'ngx-cookie-service';
import { WelcomeDialogComponent } from '../welcome-dialog/welcome-dialog.component';

// not in use currently because i'm not collaborating with a specific audience

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
      this.matDialogService.open(WelcomeDialogComponent, {
        maxWidth: '600px'
      });
      this.cookieService.set('isWelcomed', 'true');
    }
  }

}
