import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less']
})
export class WordComponent implements OnInit {
  decomposition: IDecomposition;
  pinyin: string = '';
  word: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      await this.loadWord(params['word'] || '');
    });
  }

  private async loadWord(word: string) {
    this.word = word;
    this.decomposition = await firstValueFrom(this.apiService.getDecomposition(word));
    this.pinyin = this.decomposition.characters.map(c => c.pinyin).join(' ');
  }
}
