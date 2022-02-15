import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './explore/components/character/character.component';
import { WordComponent } from './explore/components/word/word.component';

const routes: Routes = [
  { path: 'word/:word', component: WordComponent },
  { path: 'character/:character', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
