import { Movie } from "@/core/interfaces/Movie";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import Like from "@/features/home/Header/MovieBanner/Like/Like";

const urlImage = "https://image.tmdb.org/t/p/w200";

const MovieCard = (props: { movie: Movie }): JSX.Element => {
  const { movie } = props;
  const DateMovie = new Date(movie.release_date);
  const day = DateMovie.getDate();
  const month = DateMovie.toLocaleDateString("default", {
    month: "long",
  }).toLocaleUpperCase();
  const year = DateMovie.getFullYear();

  const ReleaseDate = `${month} ${day}, ${year}`;

  return (
    <div className="movie-card">
      <article
        className="poster"
        style={{ background: `url(${urlImage + movie.poster_path})` }}
      ></article>
      <article className="title">
        <h2>{movie.title}</h2>
        <p>{String(ReleaseDate)}</p>
      </article>
      <section>
        <div>
          <p>Rating</p>
          <CircularProgressWithLabel
            value={movie.vote_average * 10}
            size="25px"
            fontsize="9px"
          />
        </div>
        <div>
          <p>Favorites</p>
          <Like />
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
