import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/modules/app-core/services/title.service';

@Component({
  selector: 'app-explore-index',
  templateUrl: './explore-index.component.html',
  styleUrls: ['./explore-index.component.less']
})
export class ExploreIndexComponent implements OnInit {

  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.clear();
  }

  onSearch(event: { query: string }) {
    this.router.navigateByUrl(`/word/${event.query}`);
  }
}
