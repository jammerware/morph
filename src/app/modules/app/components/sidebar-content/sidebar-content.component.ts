import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent {
  constructor (private settingsService: SettingsService) { }

  protected settings$ = this.settingsService.current$;

  handleExperimentModeChange(change: MatSlideToggleChange) {
    this.settingsService.update({ isExperimentMode: change.checked });
  }
}
