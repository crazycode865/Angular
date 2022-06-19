import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormatComponent } from './movie-format.component';

describe('MovieFormatComponent', () => {
  let component: MovieFormatComponent;
  let fixture: ComponentFixture<MovieFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
