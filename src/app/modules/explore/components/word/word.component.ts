import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  decomposition$: Observable<IDecomposition>;
  decompSub: Subscription;
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
      this.word = params['word'];
      this.decomposition$ = this.apiService.getDecomposition(this.word);
    });

    this.decompSub = this.decomposition$.subscribe(decomp => {
      this.pinyin = decomp.word.pinyin || decomp.characters.map(c => c.pinyin).join(' ');
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

    if (this.decompSub) {
      this.decompSub.unsubscribe();
    }
  }

  showCopySnackbar(copiedText: string) {
    this.snackbar.open(`Copied "${copiedText}" to clipboard.`, 'OK', {
      duration: 1000
    });
  }
}
