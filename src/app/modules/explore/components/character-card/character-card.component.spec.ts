import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CharacterCardComponent } from './character-card.component';
import { ICharacterDecomposition } from 'src/app/models/character-decomposition';

const TEST_DECOMPOSITION: ICharacterDecomposition = {
  character: '火',
  freqRank: 433,
  pinyin: 'huǒ',
  definitions: ['fire', 'flame'],
  strokeCount: 4,
  isUnbound: false,
  commonWords: [],
  semanticRadical: null
};

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CharacterCardComponent],
    providers: [provideRouter([])]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('decomposition', TEST_DECOMPOSITION);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
