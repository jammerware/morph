import { Component } from '@angular/core';
import { VersionService } from './services/version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  appVersion: string;

  constructor(
    private versionService: VersionService) { }

  ngOnInit() { 
    this.appVersion = this.versionService.get();
  }
}
