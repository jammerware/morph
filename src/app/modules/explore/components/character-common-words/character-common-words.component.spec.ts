import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCommonWordsComponent } from './character-common-words.component';

describe('CharacterCommonWordsComponent', () => {
  let component: CharacterCommonWordsComponent;
  let fixture: ComponentFixture<CharacterCommonWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCommonWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCommonWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
