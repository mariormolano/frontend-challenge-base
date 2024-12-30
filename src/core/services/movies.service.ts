"use server";
import { Movie, DetailMovie } from "../interfaces/movie.interface";
import { InfoMovie } from "../interfaces/infomovie.interface";
import { VideoInfo } from "../interfaces/video.interface";

const TMDBServer = process.env.TMDB_URL;
const TMDBKey = process.env.TMDB_API_KEY;
const TMDBSearch = process.env.TMDB_SEARCH_URL;

const getMovie = async (id: number): Promise<DetailMovie> => {
  const movie = await fetch(`${TMDBServer}/${id}?api_key=${TMDBKey}`).then(
    (res) => res.json(),
  );
  return movie as DetailMovie;
};

const getInfoMovie = async (id: number): Promise<InfoMovie> => {
  const detailMovie = await getMovie(id);
  const videoInfo = await fetch(
    `${TMDBServer}/${id}/videos?api_key=${TMDBKey}`,
  ).then((res) => res.json());
  const similarMovies = await fetch(
    `${TMDBServer}/${id}/similar?api_key=${TMDBKey}`,
  ).then((res) => res.json());
  const recommendations = await fetch(
    `${TMDBServer}/${id}/recommendations?api_key=${TMDBKey}`,
  ).then((res) => res.json());
  const videoTemp: VideoInfo[] = [];
  if (videoInfo.results.length > 0) {
    videoInfo.results.forEach((video: VideoInfo) => {
      if (video.site === "YouTube") {
        videoTemp.push(video);
      }
    });
  }

  return {
    detailMovie,
    videoInfo: videoTemp,
    similarMovies: similarMovies.results,
    recommendations: recommendations.results,
  };
};

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

export { getMovieList, searchMovies, getMovie, getInfoMovie };
