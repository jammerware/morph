import { ChangeDetectionStrategy, Component, ErrorHandler, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { SidebarContentComponent } from '../sidebar-content/sidebar-content.component';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
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

  ngOnInit() {
    this.errorService.onError.subscribe(error => {
      this.router.navigateByUrl('error', { state: { lastError: error } });
    });
  }
}
