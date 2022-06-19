import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLanguageComponent } from './movie-language.component';

describe('MovieLanguageComponent', () => {
  let component: MovieLanguageComponent;
  let fixture: ComponentFixture<MovieLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
