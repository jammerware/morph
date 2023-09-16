import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDecomposition } from 'src/app/models/decomposition';
import { ICharacterDecomposition } from '../models/character-decomposition';
import { ITranslationResult } from '../models/translation-result';
import { SettingsService } from './settings.service';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor (
    private http: HttpClient,
    private settings: SettingsService) { }

  getCharacterDetails(character: string): Observable<ICharacterDecomposition> {
    return this.http.get(`${environment.apiRoot}/character/${character}`)
      .pipe(map(response => response as ICharacterDecomposition));
  }

  getDecomposition(query: string): Observable<IDecomposition> {
    if (!query) {
      throw new Error(`getDecomposition requires a non-null/non-empty query argument. Passed: "${query}"`)
    }

    return combineLatest([
      this.settings.current$,
      this.http.get(`${environment.apiRoot}/decomposition/${query}`)
    ]).pipe(
      map(([settings, apiResult]) => ({ settings, apiResult })),
      map(characterCtx => {
        const decomposition = characterCtx.apiResult as IDecomposition;

        // if in experiment mode, present only a single definition for each character
        if (characterCtx.settings.isExperimentMode) {
          for (const character of decomposition.characters) {
            if (character.definitions.length > 1) {
              character.definitions = [character.definitions[0]];
            }
          }
        }

        return decomposition;
      })
    );

    return this.http.get<IDecomposition>(`${environment.apiRoot}/decomposition/${query}`)
  }

  getRecommendedSearchTerms(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiRoot}/recommended-search-terms`);
  }

  translate(queries: string[]): Observable<ITranslationResult> {
    if (queries.length == 0) {
      throw new Error("translate requires queries array of length 1 or more.")
    }

    return this.http.post<ITranslationResult>(`${environment.apiRoot}/translate/all`, { text: queries });
  }
}
