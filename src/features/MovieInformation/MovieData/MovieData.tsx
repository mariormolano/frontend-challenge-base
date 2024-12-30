"use client";
import "./MovieData.css";
import Like from "../../shared/Like/Like";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import { DetailMovie } from "@/core/interfaces/movie.interface";
import { useEffect, useState } from "react";
import MovieDataSkeleton from "../MovieDataSkeleton/MovieDataSkeleton";
import Link from "next/link";

const urlImage = "https://image.tmdb.org/t/p/w200";

const apiUrlImage = "https://image.tmdb.org/t/p/original";

interface Props {
  data: Promise<DetailMovie>;
}

const MovieData: React.FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const DateMovie = new Date(movie?.release_date ? movie.release_date : "");
  const day = DateMovie.getDate();
  const month = DateMovie.toLocaleDateString("default", {
    month: "long",
  });
  const year = DateMovie.getFullYear();
  const ReleaseDate = `${month} ${day}, ${year}`;
  const hours = Math.floor(movie?.runtime ? movie.runtime / 60 : 0);
  const minutes = movie?.runtime ? movie.runtime % 60 : 0;

  useEffect(() => {
    data.then((movie) => {
      setMovie(movie);
    });
  }, []);

  return movie ? (
    <main
      className="MovieDataContainer"
      style={{ backgroundImage: `url(${apiUrlImage}${movie.backdrop_path})` }}
    >
      <article className="MovieData">
        <div className="MovieDataContent">
          <Link href={"/home"} className="Link">
            &#60;
          </Link>
          <div className="MovieDataPosterContainer">
            <article
              className="MovieDataPoster"
              style={{
                backgroundImage: `url(${urlImage + movie.poster_path})`,
              }}
            ></article>
            <button>
              Official Trailer <PlayArrowOutlined />
            </button>
          </div>
          <div className="MovieDataInfoContainer">
            <section className="MovieDataDescription">
              <dl>
                <dt className="MovieDataTitle">
                  <h1>
                    {movie.title} ({year})
                  </h1>
                  <span>
                    <p className="date">{ReleaseDate}</p>
                    <p>
                      {hours}h {minutes}min.
                    </p>
                  </span>
                  <h2>Overview:</h2>
                </dt>
                <dd>{movie.overview}</dd>
              </dl>
            </section>
            <aside className="MovieDataScore">
              <div className="MovieDataUserScore">
                <CircularProgressWithLabel
                  value={movie.vote_average * 10}
                  textsize="20px"
                  size="80px"
                  shadow={true}
                />
                <div className="MovieDataUserScoreText">
                  <p>Users</p>
                  <p>Score</p>
                </div>
              </div>
              <Like movie={movie} />
            </aside>
            <article className="MovieDataGernes">
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </article>
          </div>
        </div>
      </article>
    </main>
  ) : (
    <MovieDataSkeleton />
  );
};

export default MovieData;
