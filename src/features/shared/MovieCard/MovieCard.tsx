"use client";
import "./MovieCard.css";
import { Movie } from "@/core/interfaces/movie.interface";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import Like from "@/features/shared/Like/Like";

const urlImage = "https://image.tmdb.org/t/p/w200";

interface Props {
  movie: Movie;
  drag?: number;
}

const MovieCard: React.FC<Props> = ({ movie, drag }) => {
  const DateMovie = new Date(movie.release_date);
  const day = DateMovie.getDate();
  const month = DateMovie.toLocaleDateString("default", {
    month: "long",
  });
  const year = DateMovie.getFullYear();

  const ReleaseDate = `${month} ${day}, ${year}`;

  const handleMouseUp = (e: React.MouseEvent): void => {
    if (drag === 1 && e.button === 0) {
      window.location.href = `/movie?id=${movie.id}`;
    }
  };

  return (
    <div className="MovieCard">
      <div className="MovieCardLink" onMouseUp={handleMouseUp}>
        <article
          className="poster"
          style={{ backgroundImage: `url(${urlImage + movie.poster_path})` }}
        ></article>
        <article className="title">
          <h2>{movie.title}</h2>
          <p>{String(ReleaseDate)}</p>
        </article>
      </div>
      <section>
        <div>
          <p>Rating</p>
          <CircularProgressWithLabel
            value={movie.vote_average * 10}
            size="25px"
            textsize="9px"
          />
        </div>
        <div>
          <p>Favorites</p>
          <Like movie={movie} size={30} />
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
