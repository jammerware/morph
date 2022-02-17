import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppCoreModule } from '../app-core/app-core.module';
import { AppMaterialModule } from '../app-material/app-material.module';

import { ExploreIndexComponent } from './components/explore-index/explore-index.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { WordComponent } from './components/word/word.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    ExploreIndexComponent,
    SearchBoxComponent,
    CharacterCardComponent,
    WordComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppCoreModule,
    AppMaterialModule
  ]
})
export class ExploreModule { }
