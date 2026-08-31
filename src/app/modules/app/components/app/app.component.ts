import { ChangeDetectionStrategy, Component, ErrorHandler, NgZone, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [
        MatSidenavContainer,
        MatSidenav,
        SidebarContentComponent,
        MatSidenavContent,
        MatIconButton,
        MatIcon,
        RouterLink,
        RouterOutlet,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private errorService = inject(ErrorHandler) as ErrorService;
  private router = inject(Router);
  private zone = inject(NgZone);

  ngOnInit() {
    this.errorService.onError.subscribe(error => {
      // TODO: find out why zone is needed here
      this.zone.run(() => {
        this.router.navigateByUrl('error', { state: { lastError: error } });
      });
    });
  }
}
