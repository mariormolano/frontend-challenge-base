"use client";
import "./MovieData.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";

import Like from "../../shared/Like/Like";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import MovieDataSkeleton from "../MovieDataSkeleton/MovieDataSkeleton";
import VideoPlayer from "@/features/VideoPlayer/VideoPlayer";

import { DetailMovie } from "@/core/interfaces/movie.interface";
import { InfoMovie } from "@/core/interfaces/infomovie.interface";
import { VideoInfo } from "@/core/interfaces/video.interface";
import { Recommendations } from "@/core/interfaces/recommendations.interface";
import HorizontalRecommList from "../HorizontalRecommList/HorizontalRecommList";
import { Cast } from "@/core/interfaces/actors.interface";
import FullActorList from "../FullActorList/FullActorList";

const urlImage = "https://image.tmdb.org/t/p/w200";

const apiUrlImage = "https://image.tmdb.org/t/p/original";

interface Props {
  data: Promise<InfoMovie>;
}

const MovieData: React.FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const [video, setVideo] = useState<VideoInfo[] | null>(null);
  const [recommendations, setRecommendations] = useState<
    Recommendations[] | null
  >(null);
  const [actors, setActors] = useState<Cast[]>();

  const [videoPlayer, setVideoPlayer] = useState<boolean>(false);
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
    if (data instanceof Promise) {
      data.then((movie: InfoMovie) => {
        setMovie(movie.detailMovie);
        setVideo(movie.videoInfo);
        setActors(movie.actors);
        setRecommendations(movie.recommendations);
      });
    }
  }, []);

  return movie ? (
    <div className="MovieDataWrapper">
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
              {video?.[0]?.key && (
                <button onClick={() => setVideoPlayer(true)}>
                  Official Trailer <PlayArrowOutlined />
                </button>
              )}
              {video?.[0]?.key && videoPlayer && (
                <VideoPlayer
                  videoKey={video[0].key}
                  setVideo={setVideoPlayer}
                />
              )}
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
                <Like movie={movie} size={45} />
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
      <section className="Recommendations">
        <h2>Recommendations</h2>
        <div className="RecommendationsContainer">
          {recommendations ? (
            <HorizontalRecommList movie={recommendations} />
          ) : null}
        </div>
      </section>
      <article className="MovieDataActors">
        <h2>Actors</h2>
        {actors && <FullActorList actors={actors} />}
      </article>
    </div>
  ) : (
    <MovieDataSkeleton />
  );
};

export default MovieData;
