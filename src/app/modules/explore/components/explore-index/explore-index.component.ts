import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-index',
  templateUrl: './explore-index.component.html',
  styleUrls: ['./explore-index.component.less']
})
export class ExploreIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(event: { query: string }) {
    this.router.navigateByUrl(`/word/${event.query}`);
  }
}
