import { Component, Input, OnInit } from '@angular/core';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.less']
})
export class CharacterCardComponent implements OnInit {
  @Input() decomposition: ICharacterDecomposition;
  numberSuffix = "th";

  ngOnInit(): void {
    this.setNumberSuffix(this.decomposition.freqRank);
  }

  getCharacterLink(character: string) {
    return `/character/${character}`;
  }

  private setNumberSuffix(freqRank: number) {
    const lastFreqNumeral = freqRank.toString().slice(-1);

    if (lastFreqNumeral == "1") {
      this.numberSuffix = "st";
    }
    else if (lastFreqNumeral == "2") {
      this.numberSuffix = "nd";
    }
    else if (lastFreqNumeral == "3") {
      this.numberSuffix = "rd";
    }
  }
}
