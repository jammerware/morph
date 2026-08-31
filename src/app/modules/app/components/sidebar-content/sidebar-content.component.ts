import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material/slide-toggle';
import { SettingsService } from 'src/app/services/settings.service';
import { VersionService } from 'src/app/services/version.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-sidebar-content',
    templateUrl: './sidebar-content.component.html',
    styleUrls: ['./sidebar-content.component.scss'],
    imports: [MatSlideToggle, MatDivider, RouterLink, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContentComponent implements OnInit {
  private settingsService = inject(SettingsService);
  private versionService = inject(VersionService);

  ngOnInit(): void {
    this.appVersion = this.versionService.get();
  }

  protected appVersion: string = "";
  protected settings$ = this.settingsService.current$;

  handleExperimentModeChange(change: MatSlideToggleChange) {
    this.settingsService.update({ isExperimentMode: change.checked });
  }
}
