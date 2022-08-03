import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';
import { ICharacterDecomposition } from '../models/character-decomposition';
import { ITranslationResult } from '../models/translation-result';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_ROOT = "https://morph-chinese.herokuapp.com";
  // API_ROOT = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCharacterDetails(character: string): Observable<ICharacterDecomposition> {
    return this.http.get(`${this.API_ROOT}/character/${character}`)
      .pipe(map(response => response as ICharacterDecomposition));
  }

  getDecomposition(query: string): Observable<IDecomposition> {
    if (!query) {
      throw new Error(`getDecomposition requires a non-null/non-empty query argument. Passed: "${query}"`)
    }

    return this.http.get<IDecomposition>(`${this.API_ROOT}/decomposition/${query}`)
  }

  getRecommendedSearchTerms(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_ROOT}/recommended-search-terms`);
  }

  translate(queries: string[]): Observable<ITranslationResult> {
    if (queries.length == 0) {
      throw new Error("translate requires queries array of length 1 or more.")
    }

    return this.http.post<ITranslationResult>(`${this.API_ROOT}/translate/all`, { text: queries });
  }
}
