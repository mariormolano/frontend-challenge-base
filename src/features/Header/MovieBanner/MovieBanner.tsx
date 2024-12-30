"use client";
import "./MovieBanner.css";
import Like from "../../shared/Like/Like";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import { Movie } from "@/core/interfaces/movie.interface";
import { useEffect, useState } from "react";
import MovieBannerSkeleton from "../MovieBannerSkeleton/MovieBannerSkeleton";

const apiUrlImage = "https://image.tmdb.org/t/p/original";

interface Props {
  data: Promise<Movie>;
}

const MovieBanner: React.FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    data.then((movie) => {
      setMovie(movie);
    });
  }, []);

  return movie ? (
    <main
      className="MovieBannerContainer"
      style={{ backgroundImage: `url(${apiUrlImage}${movie.backdrop_path})` }}
    >
      <article className="MovieBanner">
        <section className="MovieBannerDescription">
          <dl>
            <dt>
              <h1>{movie.title}</h1>
            </dt>
            <dd>{movie.overview}</dd>
          </dl>
        </section>
        <aside>
          <Like movie={movie} />
          <CircularProgressWithLabel
            value={movie.vote_average * 10}
            textsize="25px"
            size="92px"
          />
        </aside>
      </article>
    </main>
  ) : (
    <MovieBannerSkeleton />
  );
};

export default MovieBanner;
