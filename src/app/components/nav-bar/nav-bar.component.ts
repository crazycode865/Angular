import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  categories = ['genre', 'language', 'type', 'format'];

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
