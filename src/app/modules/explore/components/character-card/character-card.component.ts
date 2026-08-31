import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
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
export class CharacterCardComponent implements OnInit {
  private freqRank = inject(FreqRankService);

  @Input() decomposition: ICharacterDecomposition;
  numberSuffix = "th";

  ngOnInit(): void {
    this.numberSuffix = this.freqRank.getFreqRankSuffix(this.decomposition.freqRank);
  }

  getCharacterLink(character: string) {
    return `/character/${character}`;
  }
}
