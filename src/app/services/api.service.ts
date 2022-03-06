import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, concatMap, tap } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';
import { ICharacterDecomposition } from '../models/character-decomposition';
import { ITranslationResult } from '../models/translation-result';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_ROOT = "https://morph-chinese.herokuapp.com";
  // API_ROOT = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getPopularTerms(): Observable<string[]> {
    return of([
      "volcano",
      "subway",
      "refrigerator",
      "car",
      "frog",
      "panda",
      "sweater",
      "apartment",
      "grasshopper",
      "juggle",
      "chef",
      "fight",
      "happiness",
      "wristwatch",
      "cell phone",
      "bottle",
      "hug",
      "fish",
      "background",
      "tuition"
    ]);
  }

  getCharacterDetails(character: string): Observable<ICharacterDecomposition> {
    return this.http.get(`${this.API_ROOT}/character/${character}`)
      .pipe(map(response => response as ICharacterDecomposition));
  }

  getDecomposition(query: string): Observable<IDecomposition> {
    if (!query || query == '') {
      throw new Error(`getDecomposition requires a non-null/non-empty query argument. Passed: "${query}"`)
    }

    return this.http.get<IDecomposition>(`${this.API_ROOT}/decomposition/${query}`)
  }

  translate(queries: string[]): Observable<ITranslationResult> {
    return this.http.post<ITranslationResult>(`${this.API_ROOT}/translate/all`, { text: queries });
  }
}
