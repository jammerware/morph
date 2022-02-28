import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { TitleService } from 'src/app/modules/app-core/services/title.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {
  character$: Observable<ICharacterDecomposition>;
  debug: string;

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    private title: TitleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadCharacter(params['character']);
    })
  }

  private loadCharacter(character: string) {
    this.character$ = this.apiService.getCharacterDetails(character);
    this.title.set(`${character}`);
  }
}
