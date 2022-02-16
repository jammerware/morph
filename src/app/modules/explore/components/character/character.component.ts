import { Component, Input, OnInit } from '@angular/core';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {
  @Input() decomposition: ICharacterDecomposition;

  ngOnInit(): void {
  }

}
