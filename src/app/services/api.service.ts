import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';
import { ICharacterDecomposition } from '../models/character-decomposition';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_ROOT = "https://morph-chinese.herokuapp.com";
  MOCK_API_RESULTS = {
    translation: "火山",
    characters: [
      {
        character: "火",
        freqRank: 433,
        pinyin: "huǒ",
        semanticRadical: "地",
        definitions: ["fire, flame", "burn", "anger, rage"],
        strokeCount: 4,
        isUnbound: true,
        commonWords: [
          {
            word: "火",
            frequency: 94.9815
          },
          {
            word: "火车",
            frequency: 88.7398
          },
          {
            word: "火锅",
            frequency: 46.8866
          },
          {
            word: "火车站",
            frequency: 29.8666
          }
        ]
      },
      {
        character: "山",
        freqRank: 259,
        pinyin: "shān",
        semanticRadical: "山",
        definitions: ["mountain", "hill", "peak"],
        strokeCount: 4,
        isUnbound: false,
        commonWords: [
          {
            word: "山",
            frequency: 123.5878
          },
          {
            word: "江山",
            frequency: 34.4774
          },
          {
            word: "唐山",
            frequency: 15.5819
          },
          {
            word: "山东",
            frequency: 15.1297
          }
        ]
      }
    ]
  };

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

    // return of(this.MOCK_API_RESULTS);
    return this.http.post(`${this.API_ROOT}/decompose`, { word: query }).pipe(map((response: any) => {
      response.translation = response.translation.translation;
      return response as IDecomposition;
    }));
  }
}
