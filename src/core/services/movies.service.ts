"use server";
import { Movie } from "../interfaces/movie.interface";

const TMDBServer = process.env.TMDB_URL;
const TMDBKey = process.env.TMDB_API_KEY;

const popularMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(
    `${TMDBServer}/popular?api_key=${TMDBKey}&page=${page}`,
  );
  const data = await response.json();
  const popularMovies: Movie[] = data.results as Movie[];
  return popularMovies;
};

const nowPlayingMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${TMDBServer}/nowplaying?page=${page}`);
  const data = await response.json();
  const nowPlayingMovies: Movie[] = data.results as Movie[];
  return nowPlayingMovies;
};

const upcomingMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${TMDBServer}/upcoming?page=${page}`);
  const data = await response.json();
  const upcomingMovies: Movie[] = data.results as Movie[];
  return upcomingMovies;
};

const topRatedMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${TMDBServer}/toprated?page=${page}`);
  const data = await response.json();
  const topRatedMovies: Movie[] = data.results as Movie[];
  return topRatedMovies;
};

const favoriteMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${TMDBServer}/favorite?page=${page}`);
  const data = await response.json();
  const favoriteMovies: Movie[] = data.results as Movie[];
  return favoriteMovies;
};

const favoriteMoviesProtected = (): Movie[] => {
  const favoriteMovies: Movie[] = [];
  return favoriteMovies;
};

const searchMovies = async (
  page: number,
  genre: number,
  query: string,
  orderBy: string,
): Promise<Movie[]> => {
  const response = await fetch(
    `${TMDBServer}?page=${page}&genre=${genre}&query=${query}&orderBy=${orderBy}`,
  );
  const data = await response.json();
  const searchMovies: Movie[] = data.results as Movie[];
  return searchMovies;
};

export {
  popularMovies,
  nowPlayingMovies,
  upcomingMovies,
  topRatedMovies,
  favoriteMovies,
  searchMovies,
  favoriteMoviesProtected,
};
