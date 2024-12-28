"use client";
//import { useStore } from "exome/react";
//import { moviesStore } from "@/core/storage/movies.store";
import { Movie } from "@/core/interfaces/movie.interface";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import Like from "@/features/Header/MovieBanner/Like/Like";
import { useRef } from "react";

const urlImage = "https://image.tmdb.org/t/p/w200";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const background = useRef<HTMLDivElement>(null);
  //const { setSelectedMovie } = useStore(moviesStore);
  const DateMovie = new Date(movie.release_date);
  const day = DateMovie.getDate();
  const month = DateMovie.toLocaleDateString("default", {
    month: "long",
  });
  const year = DateMovie.getFullYear();

  const ReleaseDate = `${month} ${day}, ${year}`;

  if (background.current) {
    background.current.style.background = `url(${urlImage + movie.poster_path})`;
  }

  return (
    <div className="MovieCard">
      <article
        className="poster"
        //onClick={() => setSelectedMovie(movie)}
        ref={background}
        //role="presentation"
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
            textsize="9px"
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
