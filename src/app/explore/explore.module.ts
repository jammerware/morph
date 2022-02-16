import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ExploreIndexComponent } from './components/explore-index/explore-index.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { WordComponent } from './components/word/word.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    ExploreIndexComponent,
    SearchBoxComponent,
    CharacterComponent,
    WordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class ExploreModule { }
