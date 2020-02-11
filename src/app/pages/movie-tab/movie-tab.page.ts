import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-tab',
  templateUrl: './movie-tab.page.html',
  styleUrls: ['./movie-tab.page.scss'],
})
export class MovieTabPage implements OnInit {

  movies: any;
  constructor(private _router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe( movies => this.movies = movies);
  }

  doRefresh(event): void {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  goToDetail(id: string) {
    console.log('Ir a detalle de pelicula ', id);
    this._router.navigate(['/movie-detail', id]);
  }
}
