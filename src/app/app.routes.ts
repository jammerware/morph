import { Service } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ExploreIndexComponent } from 'src/app/modules/explore/components/explore-index/explore-index.component';

@Service()
export class ResolvedWordTitle {
  resolve(route: ActivatedRouteSnapshot): string {
    const word = route.paramMap.get('word');
    return word ? `"${word}"` : 'Word';
  }
}

@Service()
export class ResolvedCharacterTitle {
  resolve(route: ActivatedRouteSnapshot): string {
    const character = route.paramMap.get('character');
    return character ? `"${character}"` : 'Character';
  }
}

export const routes: Routes = [
  {
    path: 'word/:word',
    loadComponent: () => import('src/app/modules/explore/components/word/word.component').then(m => m.WordComponent),
    title: ResolvedWordTitle
  },
  {
    path: 'character/:character',
    loadComponent: () => import('src/app/modules/explore/components/character/character.component').then(m => m.CharacterComponent),
    title: ResolvedCharacterTitle
  },
  {
    path: 'about',
    loadComponent: () => import('src/app/modules/about/components/about-index/about-index.component').then(m => m.AboutIndexComponent),
    title: 'About'
  },
  {
    path: 'error',
    loadComponent: () => import('src/app/modules/app/components/error/error.component').then(m => m.ErrorComponent),
    title: 'Error 😭'
  },
  {
    path: '',
    pathMatch: 'full',
    component: ExploreIndexComponent
  },
];
