import { Movie } from "@/core/interfaces/movie.interface";
import MovieCard from "@/features/shared/MovieList/MovieCard/MovieCard";

const FullMovieList = (props: { movies: Movie[] }): JSX.Element => {
  const { movies } = props;
  return (
    <article className="FullMovieList">
      {movies?.map((movie: Movie) =>
        movie.release_date ? <MovieCard movie={movie} key={movie.id} /> : null,
      )}
    </article>
  );
};

export default FullMovieList;
