import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';
import { ApiService } from 'src/app/services/api.service';
import { FreqRankService } from 'src/app/modules/explore/services/freq-rank.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character$: Observable<ICharacterDecomposition>;
  freqRankSuffix: string = "th";

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    private freqRank: FreqRankService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadCharacter(params['character']);
    })
  }

  public getFreqRank(freqRank: number) {
    return this.freqRank.getFreqRankSuffix(freqRank);
  }

  private loadCharacter(character: string) {
    this.character$ = this.apiService.getCharacterDetails(character);
  }
}
