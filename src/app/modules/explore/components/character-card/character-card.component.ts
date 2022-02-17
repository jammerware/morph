import { Component, Input, OnInit } from '@angular/core';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.less']
})
export class CharacterCardComponent implements OnInit {
  @Input() decomposition: ICharacterDecomposition;

  ngOnInit(): void {
  }

  getCharacterLink(character: string) {
    return `/character/${character}`;
  }
}
