"use client";
import "./MovieList.css";
import { Movie } from "@/core/interfaces/movie.interface";
import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "./FullMovieList/FullMovieList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  category: string;
  title: string;
  type: string;
}

const MovieList: React.FC<Props> = ({ category, title, type }) => {
  const movies: Movie[] = [];
  if (category === "popular") {
    const movie: Movie = {
      id: 1,
      title: "Movie 1",
      overview: "Overview 1",
      release_date: "2021-09-01",
      poster_path: "poster_path 1",
      backdrop_path: "backdrop_path 1",
      vote_average: 1,
      vote_count: 1,
      genre_ids: [1],
      original_language: "en",
      original_title: "Original Title 1",
      popularity: 1,
      adult: false,
      video: false,
    };
    movies.push(movie);
  }

  return (
    <div className="MovieList">
      {type === "horizontal" ? (
        <span>
          <h2>{title}</h2>
          <HorizontalMovieList movies={movies} />
        </span>
      ) : (
        <span>
          <button>
            <ArrowBackIcon />
          </button>
          <h2>{title}</h2>
          <FullMovieList movies={movies} />
        </span>
      )}
    </div>
  );
};

export default MovieList;
