import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

import { ApiService } from 'src/app/services/api.service';
import { TitleService } from 'src/app/modules/app-core/services/title.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  decomposition: IDecomposition;
  pinyin: string = '';
  word: string = '';

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    private title: TitleService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      console.log('looking up', params['word']);
      await this.loadWord(params['word'] || '');
    });
  }

  private async loadWord(word: string) {
    this.word = word;
    this.decomposition = await firstValueFrom(this.apiService.getDecomposition(word));
    this.pinyin = this.decomposition.characters.map(c => c.pinyin).join(' ');
    this.title.set(`${this.decomposition.word.l1} (${this.decomposition.word.translation})`);
  }
}
