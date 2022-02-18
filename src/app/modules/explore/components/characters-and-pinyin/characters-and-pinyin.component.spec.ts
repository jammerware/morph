import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersAndPinyinComponent } from './characters-and-pinyin.component';

describe('CharactersAndPinyinComponent', () => {
  let component: CharactersAndPinyinComponent;
  let fixture: ComponentFixture<CharactersAndPinyinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersAndPinyinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersAndPinyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
