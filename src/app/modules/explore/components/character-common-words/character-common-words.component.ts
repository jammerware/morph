import { ChangeDetectionStrategy, Component, Input, OnChanges, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITranslationResult } from 'src/app/models/translation-result';
import { ApiService } from 'src/app/services/api.service';
import { RouterLink } from '@angular/router';
import { MatChipSet, MatChip } from '@angular/material/chips';
import { AsyncPipe, LowerCasePipe } from '@angular/common';

@Component({
    selector: 'app-character-common-words',
    templateUrl: './character-common-words.component.html',
    styleUrls: ['./character-common-words.component.less'],
    imports: [MatChipSet, MatChip, RouterLink, AsyncPipe, LowerCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCommonWordsComponent implements OnChanges {
  private apiService = inject(ApiService);

  words$: Observable<ITranslationResult>;
  @Input() words: { word: string, frequency: number }[];

  ngOnChanges(): void {
    if (this.words && this.words.length) {
      this.words$ = this.apiService.translate(this.words.map(w => w.word))
    }
  }
}
