import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

import { ApiService } from 'src/app/services/api.service';
import { NgxKeyboardEventsService, NgxKey, NgxKeyboardEvent } from 'ngx-keyboard-events';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackbar: MatSnackBar) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      await this.loadWord(params['word'] || '');
    });

    // this is gross, but without it, the screen immediately navigates to search
    // if the search from the box component is invoked with the enter key
    setTimeout(() => {
      this.keyboardSub = this.keyboard.onKeyUp$.subscribe(event => {
        if(event.code == NgxKey.Return) {
          this.router.navigateByUrl('/');
        }
      });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.keyboardSub) {
      this.keyboardSub.unsubscribe();
    }
  }

  copyCharacters() {
    this.snackbar.open(`Copied "${this.decomposition.word.translation}" to clipboard.`, 'OK');
  }

  copyPinyin() {
    this.snackbar.open(`Copied "${this.pinyin}" to clipboard.`, 'OK');
  }

  private async loadWord(word: string) {
    this.word = word;
    this.decomposition = await firstValueFrom(this.apiService.getDecomposition(word));
    this.pinyin = (this.decomposition.word.pinyin || this.decomposition.characters.map(c => c.pinyin).join(' '));
  }
}
