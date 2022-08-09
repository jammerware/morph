import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutIndexComponent } from './about/components/about-index/about-index.component';
import { ErrorComponent } from './app/components/error/error.component';
import { CharacterComponent } from './explore/components/character/character.component';
import { ExploreIndexComponent } from './explore/components/explore-index/explore-index.component';
import { WordComponent } from './explore/components/word/word.component';

const routes: Routes = [
  { path: 'word/:word', component: WordComponent },
  { path: 'character/:character', component: CharacterComponent },
  { path: 'about', component: AboutIndexComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', pathMatch: 'full', component: ExploreIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
