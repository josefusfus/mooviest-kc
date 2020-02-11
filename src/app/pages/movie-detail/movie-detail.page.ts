import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie: any;
  id: string;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.id = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => console.log(params));
    this.movieService.getDetail(this.id).subscribe(movie => this.movie = movie);
  }

}
