import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsService } from 'src/app/services/settings.service';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  constructor (
    private settingsService: SettingsService,
    private versionService: VersionService) { }

  ngOnInit(): void {
    this.appVersion = this.versionService.get();
  }

  protected appVersion: string = "";
  protected settings$ = this.settingsService.current$;

  handleExperimentModeChange(change: MatSlideToggleChange) {
    this.settingsService.update({ isExperimentMode: change.checked });
  }
}
