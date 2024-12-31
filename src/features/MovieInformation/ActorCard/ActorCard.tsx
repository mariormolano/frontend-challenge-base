"use client";
import { Cast } from "@/core/interfaces/actors.interface";
import "./ActorCard.css";
const urlImage = "https://image.tmdb.org/t/p/w200";

interface Props {
  actor: Cast;
}

const ActorCard: React.FC<Props> = ({ actor }) => {
  return (
    <div className="ActorCard">
      <article
        className="poster"
        style={{ backgroundImage: `url(${urlImage + actor.profile_path})` }}
      ></article>

      <article className="title">
        <h2>{actor.name}</h2>
      </article>
      <section>
        <div>
          <p>Popularity</p>
          <p>{actor.popularity}</p>
        </div>
      </section>
    </div>
  );
};

export default ActorCard;
