import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IDecomposition } from 'src/app/models/decomposition';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_ROOT = "https://morph-chinese.herokuapp.com";

  constructor(private http: HttpClient) { }

  getPopularTerms(): Observable<string[]> {
    return of([
      "volcano",
      "subway",
      "refrigerator",
      "car",
      "frog",
      "raccoon",
      "sweater",
      "apartment"
    ]);
  }

  getDecomposition(query: string): Observable<IDecomposition> {
    if (!query || query == '') {
      throw new Error(`getDecomposition requires a non-null/non-empty query argument. Passed: "${query}"`)
    }
    
    // return this.http.post(`${this.API_ROOT}/decompose`, { word: query }).pipe(map(response => response as IDecomposition));
    return of({
      translation: "火山",
      characters: [
        {
          character: "火",
          freqRank: 433,
          pinyin: "huǒ",
          radical: "火",
          definition: "fire, flame; burn; anger, rage"
        },
        {
          character: "山",
          freqRank: 259,
          pinyin: "shān",
          radical: "山",
          definition: "mountain, hill, peak"
        }
      ]
    })
  }
}
