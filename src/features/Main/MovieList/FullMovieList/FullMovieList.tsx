import "./FullMovieList.css";
import { Movie } from "@/core/interfaces/movie.interface";
import MovieCard from "@/features/Main/MovieList/MovieCard/MovieCard";

interface Props {
  movies?: Movie[];
}

const FullMovieList: React.FC<Props> = ({ movies }) => {
  return (
    <article className="FullMovieList">
      {movies?.map((movie: Movie) =>
        movie.release_date ? <MovieCard movie={movie} key={movie.id} /> : null,
      )}
    </article>
  );
};

export default FullMovieList;
