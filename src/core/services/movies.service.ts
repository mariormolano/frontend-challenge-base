"use server";
import { Movie } from "../interfaces/movie.interface";

const TMDBServer = process.env.TMDB_URL;
const TMDBKey = process.env.TMDB_API_KEY;
const TMDBSearch = process.env.TMDB_SEARCH_URL;

const getMovieList = async (
  category: string,
  page: number,
): Promise<Movie[]> => {
  const response = await fetch(
    `${TMDBServer}/${category}?api_key=${TMDBKey}&page=${page}`,
  );
  const data = await response.json();
  const movies: Movie[] = data.results as Movie[];
  return movies;
};

const searchMovies = async (
  page: number,
  genre: number,
  query: string,
): Promise<Movie[]> => {
  const response = await fetch(
    `${TMDBSearch}?query${query}?api_key=${TMDBKey}&page=${page}`,
  );
  const data = await response.json();
  const searchMovies: Movie[] = data.results as Movie[];
  return searchMovies;
};

export { getMovieList, searchMovies };
