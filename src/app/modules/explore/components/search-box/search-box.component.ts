import { ChangeDetectionStrategy, Component, Input, OnInit, input, output } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { AutofocusDirective } from '../../../app-core/directives/autofocus.directive';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.less'],
    imports: [FormsModule, MatFormField, MatLabel, MatInput, AutofocusDirective, MatButton, MatIcon, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {
  readonly defaultHint = input('');
  @Input() query = '';
  readonly hints = input<string[] | null>([]);
  readonly search = output<{
    query: string;
}>();

  // pretty suggestions
  placeholder$: Observable<string>;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.placeholder$ = interval(5000).pipe(map(_ => {
      const hints = this.hints();
      if (hints && hints.length) {
        return hints[Math.floor(Math.random() * hints.length)];
      }

      return this.defaultHint();
    }));
  }

  clear() {
    this.query = '';
  }

  raise() {
    this.search.emit({ query: this.query });
  }

  formSubmit($event: Event) {
    this.raise();
  }

  onEnter($event: Event) {
    $event.preventDefault();
    this.raise();
  }
}
