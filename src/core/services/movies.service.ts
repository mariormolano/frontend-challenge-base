"use server";
import { Movie } from "../interfaces/movie.interface";

const TMDBServer = process.env.TMDB_URL;
const TMDBKey = process.env.TMDB_API_KEY;

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
  orderBy: string,
): Promise<Movie[]> => {
  const response = await fetch(
    `${TMDBServer}?page=${page}&genre=${genre}&query=${query}&orderBy=${orderBy}`,
  );
  const data = await response.json();
  const searchMovies: Movie[] = data.results as Movie[];
  return searchMovies;
};

export { getMovieList, searchMovies };
