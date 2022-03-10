import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';

import { AppCoreModule } from '../app-core/app-core.module';
import { AppMaterialModule } from '../app-material/app-material.module';

import { ExploreIndexComponent } from './components/explore-index/explore-index.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { WordComponent } from './components/word/word.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersAndPinyinComponent } from './components/characters-and-pinyin/characters-and-pinyin.component';
import { CharacterCommonWordsComponent } from './components/character-common-words/character-common-words.component';

@NgModule({
  declarations: [
    ExploreIndexComponent,
    SearchBoxComponent,
    CharacterCardComponent,
    WordComponent,
    CharacterComponent,
    CharactersAndPinyinComponent,
    CharacterCommonWordsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxKeyboardEventsModule,
    AppCoreModule,
    AppMaterialModule
  ]
})
export class ExploreModule { }
