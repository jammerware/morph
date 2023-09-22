import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export enum LocalStorageKey {
  Settings = "settings"
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _window: Window;

  constructor (@Inject(DOCUMENT) document: Document) {
    this._window = window;
  }

  get<T>(key: LocalStorageKey) {
    const value = this._window.localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }

  set<T>(key: LocalStorageKey, value: T) {
    this._window.localStorage.setItem(key, JSON.stringify(value));
  }
}
