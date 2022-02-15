import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstValueFrom, interval, map, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less']
})
export class SearchBoxComponent implements OnInit {
  @Input() query = '';
  @Output() search = new EventEmitter<{ query: string }>();

  // pretty suggestions
  private popularTerms: string[] = [];
  placeholder$: Observable<string>;

  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.popularTerms = await firstValueFrom(this.apiService.getPopularTerms());
    
    this.placeholder$ = interval(5000).pipe(map(_ => {
      if (this.popularTerms && this.popularTerms.length) {
        const popTerm = this.popularTerms[Math.floor(Math.random() * this.popularTerms.length)];
        return `Try "${popTerm}"`;
      }

      return 'Try "movie night"';
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
