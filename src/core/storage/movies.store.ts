import { Exome } from "exome";
import { Movie } from "../interfaces/Movie";

class MoviesStore extends Exome {
  public popularMovies: Movie[] = [];
  public nowPlayingMovies: Movie[] = [];
  public upcomingMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];
  public favoriteMovies: Movie[] = [];
  public pelicula: Movie | null = null;

  public async setPopularMovies(page: number): Promise<void> {
    await fetch(`http://localhost:3005/movie/popular?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.popularMovies = data.results as Movie[];
      });
  }

  public async setNowPlayingMovies(page: number): Promise<void> {
    await fetch(`http://localhost:3005/movie/nowplaying?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.nowPlayingMovies = data.results as Movie[];
      });
  }

  public async setUpcomingMovies(page: number): Promise<void> {
    await fetch(`http://localhost:3005/movie/upcoming?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.upcomingMovies = data.results as Movie[];
      });
  }

  public async setTopRatedMovies(page: number): Promise<void> {
    await fetch(`http://localhost:3005/movie/toprated?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.topRatedMovies = data.results as Movie[];
      });
  }

  public async setFavoriteMovies(page: number): Promise<void> {
    await fetch(`http://localhost:3005/movie/favorite?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        this.favoriteMovies = data.results as Movie[];
      });
  }
}

export const moviesStore = new MoviesStore();
