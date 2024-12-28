"use client";
import { Movie } from "@/core/interfaces/movie.interface";
import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "./FullMovieList/FullMovieList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MovieList = (props: {
  movies: Movie[];
  title: string;
  type: string;
}): JSX.Element => {
  const { movies, title, type } = props;
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
