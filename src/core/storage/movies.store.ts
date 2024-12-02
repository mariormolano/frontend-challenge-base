"use client";
import { Exome } from "exome";
import { Movie } from "../interfaces/movie.interface";
import {
  popularMovies,
  nowPlayingMovies,
  upcomingMovies,
  topRatedMovies,
  favoriteMovies,
} from "../services/movies.service";

class MoviesStore extends Exome {
  public popularMovies: Movie[] = [];
  public moviesStatus: boolean = false;
  public nowPlayingMovies: Movie[] = [];
  public upcomingMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];
  public favoriteMovies: Movie[] = [];
  public selectedMovie: Movie | null = null;

  public async setPopularMovies(page: number = 1): Promise<void> {
    this.popularMovies = await popularMovies(page).then((data) => {
      this.moviesStatus = true;
      this.selectedMovie = data[Math.floor(Math.random() * data.length)];
      return data;
    });
  }

  public async setNowPlayingMovies(page: number = 1): Promise<void> {
    this.nowPlayingMovies = await nowPlayingMovies(page);
  }

  public async setUpcomingMovies(page: number = 1): Promise<void> {
    this.upcomingMovies = await upcomingMovies(page);
  }

  public async setTopRatedMovies(page: number = 1): Promise<void> {
    this.topRatedMovies = await topRatedMovies(page);
  }

  public async setFavoriteMovies(page: number = 1): Promise<void> {
    this.favoriteMovies = await favoriteMovies(page);
  }

  public setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}

export const moviesStore = new MoviesStore();
