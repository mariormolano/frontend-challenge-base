/*page: page,
      results: temporal.slice((page - 1) * itemsPerPage, page * itemsPerPage),
      total_pages: Math.ceil(temporal.length / itemsPerPage),
      total_results: temporal.length,*/

import { Movie } from "./movie.interface";

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
