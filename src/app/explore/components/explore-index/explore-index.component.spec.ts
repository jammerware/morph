import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreIndexComponent } from './explore-index.component';

describe('ExploreIndexComponent', () => {
  let component: ExploreIndexComponent;
  let fixture: ComponentFixture<ExploreIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
