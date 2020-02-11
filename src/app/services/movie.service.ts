import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlInicial: string;

  constructor(private _http: HttpClient) {
    this.urlInicial = 'http://localhost:3000/movie?id=';
  }


  getAllMovies(): Observable<any> {

    return this._http.get('http://localhost:3000/movie');
  }

  getDetail(id: string) {
    //const URL = this.urlInicial + id;
    return this._http.get(this.urlInicial + id);
  }
}

