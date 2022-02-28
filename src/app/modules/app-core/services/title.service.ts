import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class TitleService {
  constructor(private title: Title) { }

  set(title: string) {
    if (!title) {
      this.title.setTitle("Morph");
    }
    else {
      this.title.setTitle(`${title} | Morph`);
    }
  }
}
