"use client";
import "./MovieBanner.css";
import Like from "../../shared/Like/Like";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import { Movie } from "@/core/interfaces/movie.interface";

const apiUrlImage = "https://image.tmdb.org/t/p/original";

interface Props {
  data: Promise<Movie>;
}

const MovieBanner: React.FC<Props> = async ({ data }) => {
  const { id, title, overview, backdrop_path: backdropPath } = await data;

  return (
    <main
      className="MovieBannerContainer"
      style={{ backgroundImage: `url(${apiUrlImage}${backdropPath})` }}
    >
      <article className="MovieBanner">
        <section className="MovieBannerDescription">
          <dl>
            <dt>
              <h1>{title}</h1>
            </dt>
            <dd>{overview}</dd>
          </dl>
        </section>
        <aside>
          <Like id={id} />
          <CircularProgressWithLabel value={50} textsize="25px" size="92px" />
        </aside>
      </article>
    </main>
  );
};

export default MovieBanner;
