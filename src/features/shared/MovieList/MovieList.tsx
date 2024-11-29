import { Movie } from "@/core/interfaces/Movie";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = (props: { movies: Movie[]; title: string }): JSX.Element => {
  const { movies, title } = props;
  return (
    <>
      <h2>{title}</h2>
      <article className="MovieList">
        {movies?.map((movie, key) => <MovieCard movie={movie} key={key} />)}
      </article>
    </>
  );
};

export default MovieList;
