import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITranslationResult } from 'src/app/models/translation-result';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-common-words',
  templateUrl: './character-common-words.component.html',
  styleUrls: ['./character-common-words.component.less']
})
export class CharacterCommonWordsComponent implements OnInit {
  words$: Observable<ITranslationResult>;
  @Input() words: { word: string, frequency: number }[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.words && this.words.length) {
      this.words$ = this.apiService.translate(this.words.map(w => w.word))
    }
  }
}
