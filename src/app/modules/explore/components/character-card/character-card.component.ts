import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { FreqRankService } from 'src/app/modules/explore/services/freq-rank.service';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.less'],
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  private freqRank = inject(FreqRankService);

  readonly decomposition = input.required<ICharacterDecomposition>();
  readonly numberSuffix = computed(() => this.freqRank.getFreqRankSuffix(this.decomposition().freqRank));

  getCharacterLink(character: string) {
    return `/character/${character}`;
  }
}
