import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutIndexComponent } from './modules/about/components/about-index/about-index.component';
import { CharacterComponent } from './modules/explore/components/character/character.component';
import { ExploreIndexComponent } from './modules/explore/components/explore-index/explore-index.component';
import { WordComponent } from './modules/explore/components/word/word.component';

const routes: Routes = [
  { path: 'word/:word', component: WordComponent },
  { path: 'character/:character', component: CharacterComponent },
  { path: 'about', component: AboutIndexComponent },
  { path: '', pathMatch: 'full', component: ExploreIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
