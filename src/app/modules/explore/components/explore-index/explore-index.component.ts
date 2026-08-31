import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { AsyncPipe } from '@angular/common';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
    selector: 'app-explore-index',
    templateUrl: './explore-index.component.html',
    styleUrls: ['./explore-index.component.less'],
    imports: [SearchBoxComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreIndexComponent implements OnInit {
  private api = inject(ApiService);
  private router = inject(Router);

  recommendedSearchTerms: Observable<string[]>;

  ngOnInit(): void {
    this.recommendedSearchTerms = this.api.getRecommendedSearchTerms();
  }

  onSearch(event: { query: string }) {
    this.router.navigateByUrl(`/word/${event.query}`);
  }
}
