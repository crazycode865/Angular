import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _baseUrl = 'http://localhost:8080/movie-api/movies';

  constructor(private httpClient: HttpClient) {}

  getAllMovies = (): Observable<Movie[]> => {
    return this.httpClient.get<Movie[]>(this._baseUrl);
  };
  getById = (id: number): Observable<Movie> => {
    let url = `${this._baseUrl}/movieId/${id}`;
    return this.httpClient.get<Movie>(url);
  };

  // Get All Distincts
  getDistinctLanguage = (): Observable<string[]> => {
    let url = `${this._baseUrl}/language/distinct`;
    return this.httpClient.get<string[]>(url);
  };

  getDistinctGenre = (): Observable<string[]> => {
    let url = `${this._baseUrl}/genre/distinct`;
    return this.httpClient.get<string[]>(url);
  };
  getDistinctFormat = (): Observable<string[]> => {
    let url = `${this._baseUrl}/format/distinct`;
    return this.httpClient.get<string[]>(url);
  };

  getDistinctType = (): Observable<string[]> => {
    let url = `${this._baseUrl}/type/distinct`;
    return this.httpClient.get<string[]>(url);
  };

  getByGenre = (genre: string): Observable<Movie[]> => {
    let url = `${this._baseUrl}/genre/${genre}`;
    return this.httpClient.get<Movie[]>(url);
  };
  getByLanguage = (language: string): Observable<Movie[]> => {
    let url = `${this._baseUrl}/language/${language}`;
    return this.httpClient.get<Movie[]>(url);
  };
  getByType = (type: string): Observable<Movie[]> => {
    let url = `${this._baseUrl}/type/${type}`;
    return this.httpClient.get<Movie[]>(url);
  };
  getByFormat = (format: string): Observable<Movie[]> => {
    let url = `${this._baseUrl}/format/${format}`;
    return this.httpClient.get<Movie[]>(url);
  };
}
