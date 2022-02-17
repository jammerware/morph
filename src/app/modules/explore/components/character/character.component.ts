import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {
  character$: Observable<ICharacterDecomposition>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadCharacter(params['character']);
    })
  }

  private async loadCharacter(character: string) {
    this.character$ = await this.apiService.getCharacterDetails(character);
  }
}
