import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageKey, LocalStorageService } from './local-storage.service';

export interface Settings {
  isExperimentMode: boolean;
}

export interface SettingsUpdate {
  isExperimentMode?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private _settings$: BehaviorSubject<Settings>;
  public current$: Observable<Settings>;

  private static DEFAULT_SETTINGS: Settings = {
    isExperimentMode: false
  };

  constructor (private localStorage: LocalStorageService) {
    this._settings$ = new BehaviorSubject<Settings>(
      this.localStorage.get<Settings>(LocalStorageKey.Settings || SettingsService.DEFAULT_SETTINGS)
    );

    this.current$ = this._settings$.asObservable();
  }

  update(settings: SettingsUpdate) {
    const newSettings = {
      ...this._settings$.value,
      ...settings
    };

    this.localStorage.set(LocalStorageKey.Settings, newSettings)
    this._settings$.next(newSettings);
  }
}
