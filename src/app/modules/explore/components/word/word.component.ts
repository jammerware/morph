import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

import { ApiService } from 'src/app/services/api.service';
import { NgxKeyboardEventsService, NgxKey, NgxKeyboardEvent } from 'ngx-keyboard-events';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit, OnDestroy {
  decomposition: IDecomposition;
  pinyin: string = '';
  word: string = '';
  private keyboardSub: Subscription;

  constructor(
    private apiService: ApiService, 
    private keyboard: NgxKeyboardEventsService,
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      await this.loadWord(params['word'] || '');
    });

    this.keyboardSub = this.keyboard.onKeyUp$.subscribe(event => {
      if(event.code == NgxKey.Backspace) {
        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnDestroy() {
    if (this.keyboardSub) {
      this.keyboardSub.unsubscribe();
    }
  }

  private async loadWord(word: string) {
    this.word = word;
    this.decomposition = await firstValueFrom(this.apiService.getDecomposition(word));
    this.pinyin = (this.decomposition.word.pinyin || this.decomposition.characters.map(c => c.pinyin).join(' '));
    // this.pinyin = this.decomposition.characters.map(c => c.pinyin).join(' ');
  }
}
