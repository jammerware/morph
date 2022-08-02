import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less']
})
export class SearchBoxComponent implements OnInit {
  @Input() defaultHint = '';
  @Input() query = '';
  @Input() hints: string[] | null = [];
  @Output() search = new EventEmitter<{ query: string }>();

  // pretty suggestions
  placeholder$: Observable<string>;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.placeholder$ = interval(5000).pipe(map(_ => {
      if (this.hints && this.hints.length) {
        return this.hints[Math.floor(Math.random() * this.hints.length)];
      }

      return this.defaultHint;
    }));
  }

  clear() {
    this.query = '';
  }

  raise() {
    this.search.emit({
      query: this.query
    });
  }

  formSubmit($event: Event) {
    this.raise();
  }

  onEnter($event: Event) {
    $event.preventDefault();
    this.raise();
  }
}
