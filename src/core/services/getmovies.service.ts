"use server";
import { Movie } from "../interfaces/movie.interface";
import { MovieResponse } from "../interfaces/movieresponse.interface";
const TMDBKey = process.env.TMDB_API_KEY;
const TMDBSearch = process.env.TMDB_SEARCH_URL;

const cacheQuery = {};
const itemsPerPage = 25;
let totalPages: number = 1;
let items: Movie[] = [];

export const getMoviesByTitle = async (
  query: string,
  page: string,
): Promise<Movie[]> => {
  const params = {
    query: query,
    include_adult: "false",
    language: "en-US",
    page: page,
    api_key: TMDBKey ?? "",
  };

  const searchParams = new URLSearchParams(params);

  const response = await fetch(`${TMDBSearch}?` + searchParams.toString());

  const data = await response.json();
  const searchMovies: Movie[] = data.results as Movie[];
  totalPages = data.total_pages;
  return searchMovies;
};

export const getMoviesWithConditionals = async (
  page: number,
  genre: number,
  query: string,
  orderBy?: string,
): Promise<MovieResponse> => {
  let temporal: Movie[] = [];
  let pageCount: number = 1;

  // Verifica si la consulta ya se encuentra en cacheQuery
  // para no repetir la consulta a la API
  if (cacheQuery[query]) {
    temporal = cacheQuery[query];
    if (genre > 0) {
      temporal = temporal.filter((movie: Movie) =>
        movie.genre_ids.includes(genre),
      );
    }

    if (orderBy === "title") {
      temporal.sort((a, b) => a.title.localeCompare(b.title));
    } else if (orderBy === "popularity") {
      temporal.sort((a, b) => b.popularity - a.popularity);
    }

    const response = {
      page: page,
      results: temporal.slice((page - 1) * itemsPerPage, page * itemsPerPage),
      total_pages: Math.ceil(temporal.length / itemsPerPage),
      total_results: temporal.length,
    };
    return response;
  }

  while (pageCount <= totalPages) {
    const data = await getMoviesByTitle(query, pageCount.toString()).then(
      (response) => response,
    );
    if (typeof data === "object") {
      items = items.concat(data);
    }
    pageCount++;
  }

  // Alamcena el resultado de la consulta en cacheQuery
  cacheQuery[query] = items;
  temporal = items;

  if (genre > 0) {
    temporal = temporal.filter((movie: Movie) =>
      movie.genre_ids.includes(genre),
    );
  }

  if (orderBy === "title") {
    temporal.sort((a, b) => a.title.localeCompare(b.title));
  } else if (orderBy === "popularity") {
    temporal.sort((a, b) => b.popularity - a.popularity);
  }

  items = [];

  const response = {
    page: page,
    results: temporal.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    total_pages: Math.ceil(temporal.length / itemsPerPage),
    total_results: temporal.length,
  };

  return response;
};
