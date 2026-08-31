import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, signal, DOCUMENT } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

import { ApiService } from 'src/app/services/api.service';
import { NgxKeyboardEventsService, NgxKey } from 'ngx-keyboard-events';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncPipe, LowerCasePipe } from '@angular/common';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss'],
    imports: [MatProgressBar, MatIconButton, RouterLink, MatIcon, MatDivider, CharacterCardComponent, MatTooltip, CdkCopyToClipboard, AsyncPipe, LowerCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit, OnDestroy {
  word = signal('');
  decomposition$: Observable<IDecomposition>;
  private keyboardSub: Subscription;

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private apiService: ApiService,
    private keyboard: NgxKeyboardEventsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar) {
    this.decomposition$ = this.route.params.pipe(
      tap(params => this.word.set(params['word'])),
      switchMap(params => this.apiService.getDecomposition(params['word']))
    );
  }

  ngOnInit(): void {
    // this is gross, but without it, the screen immediately navigates to search
    // if the search from the box component is invoked with the enter key
    setTimeout(() => {
      this.keyboardSub = this.keyboard.onKeyUp$.subscribe(event => {
        if (event.code == NgxKey.Return) {
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

  getPinyin(decomposition: IDecomposition): string {
    return decomposition.word.pinyin || decomposition.characters.map(c => c.pinyin).join(' ');
  }

  showCopySnackbar(copiedText: string) {
    this.snackbar.open(`Copied "${copiedText}" to clipboard.`, 'OK', {
      duration: 2000
    });
  }

  toGoogleTranslate(text: string) {
    this.document.defaultView?.open(`https://translate.google.com/?sl=en&tl=zh-CN&text=${encodeURIComponent(text)}&op=translate`);
  }
}
