import { Component, Input, OnInit } from '@angular/core';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { FreqRankService } from 'src/app/modules/explore/services/freq-rank.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.less']
})
export class CharacterCardComponent implements OnInit {
  @Input() decomposition: ICharacterDecomposition;
  numberSuffix = "th";

  constructor(private freqRank: FreqRankService) { }

  ngOnInit(): void {
    this.numberSuffix = this.freqRank.getFreqRankSuffix(this.decomposition.freqRank);
  }

  getCharacterLink(character: string) {
    return `/character/${character}`;
  }
}
