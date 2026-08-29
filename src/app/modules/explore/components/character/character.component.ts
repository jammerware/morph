import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    standalone: true,
    imports: [CharacterCommonWordsComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
  freqRankSuffix: string = "th";
  character$: Observable<ICharacterDecomposition>;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private freqRank: FreqRankService) {
    this.character$ = this.route.params.pipe(
      switchMap(params => this.apiService.getCharacterDetails(params['character']))
    );
  }

  public getFreqRank(freqRank: number) {
    return this.freqRank.getFreqRankSuffix(freqRank);
  }
}
