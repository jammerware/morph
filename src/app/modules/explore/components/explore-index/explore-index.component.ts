import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { TitleService } from 'src/app/modules/app-core/services/title.service';

@Component({
  selector: 'app-explore-index',
  templateUrl: './explore-index.component.html',
  styleUrls: ['./explore-index.component.less']
})
export class ExploreIndexComponent implements OnInit {
  recommendedSearchTerms: Observable<string[]>;

  constructor(
    private api: ApiService,
    private router: Router, 
    private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.clear();
    this.recommendedSearchTerms = this.api.getRecommendedSearchTerms();
  }

  onSearch(event: { query: string }) {
    this.router.navigateByUrl(`/word/${event.query}`);
  }
}
