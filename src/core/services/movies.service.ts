"use server";
import { Movie } from "../interfaces/movie.interface";

const serverBackend = process.env.BACKEND_URL;

const popularMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${serverBackend}/popular?page=${page}`);
  const data = await response.json();
  const popularMovies: Movie[] = data.results as Movie[];
  return popularMovies;
};

const nowPlayingMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${serverBackend}/nowplaying?page=${page}`);
  const data = await response.json();
  const nowPlayingMovies: Movie[] = data.results as Movie[];
  return nowPlayingMovies;
};

const upcomingMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${serverBackend}/upcoming?page=${page}`);
  const data = await response.json();
  const upcomingMovies: Movie[] = data.results as Movie[];
  return upcomingMovies;
};

const topRatedMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${serverBackend}/toprated?page=${page}`);
  const data = await response.json();
  const topRatedMovies: Movie[] = data.results as Movie[];
  return topRatedMovies;
};

const favoriteMovies = async (page: number): Promise<Movie[]> => {
  const response = await fetch(`${serverBackend}/favorite?page=${page}`);
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
    `${serverBackend}?page=${page}&genre=${genre}&query=${query}&orderBy=${orderBy}`,
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
