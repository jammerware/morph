import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

import { AppTitleStrategy } from './app-title-strategy';
import { AboutIndexComponent } from 'src/app/modules/about/components/about-index/about-index.component';
import { ErrorComponent } from 'src/app/modules/app/components/error/error.component';
import { CharacterComponent } from 'src/app/modules/explore/components/character/character.component';
import { ExploreIndexComponent } from 'src/app/modules/explore/components/explore-index/explore-index.component';
import { WordComponent } from 'src/app/modules/explore/components/word/word.component';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ResolvedWordTitle implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    return `"${route.paramMap.get('word')}"` || 'Word';
  }
}

@Injectable({ providedIn: 'root'})
export class ResolvedCharacterTitle implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    return `"${route.paramMap.get('character')}"` || 'Character';
  }

}

const routes: Routes = [
  { path: 
    'word/:word', 
    component: WordComponent,
    title: ResolvedWordTitle
  },
  { 
    path: 'character/:character', 
    component: CharacterComponent,
    title: ResolvedCharacterTitle
  },
  { 
    path: 'about', 
    component: AboutIndexComponent,
    title: 'About'
  },
  { 
    path: 'error', 
    component: ErrorComponent,
    title: 'Error 😭'
  },
  { 
    path: '', 
    pathMatch: 'full', 
    component: ExploreIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: AppTitleStrategy }
  ]
})
export class AppRoutingModule { }
