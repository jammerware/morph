import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/modules/app-core/services/title.service';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.less']
})
export class AboutIndexComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit(): void {
    this.title.set("About");
  }

}
