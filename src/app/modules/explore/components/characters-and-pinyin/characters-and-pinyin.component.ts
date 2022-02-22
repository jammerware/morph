import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-and-pinyin',
  templateUrl: './characters-and-pinyin.component.html',
  styleUrls: ['./characters-and-pinyin.component.less']
})
export class CharactersAndPinyinComponent {
  @Input() characters: string | undefined;
  @Input() pinyin: string | undefined;
  
  constructor() { }
}
