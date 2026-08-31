import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { ApiService } from 'src/app/services/api.service';
import { FreqRankService } from 'src/app/modules/explore/services/freq-rank.service';
import { CharacterCommonWordsComponent } from '../character-common-words/character-common-words.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    imports: [CharacterCommonWordsComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  private freqRank = inject(FreqRankService);

  freqRankSuffix: string = "th";
  character$: Observable<ICharacterDecomposition>;

  constructor() {
    this.character$ = this.route.params.pipe(
      switchMap(params => this.apiService.getCharacterDetails(params['character']))
    );
  }

  public getFreqRank(freqRank: number) {
    return this.freqRank.getFreqRankSuffix(freqRank);
  }
}
