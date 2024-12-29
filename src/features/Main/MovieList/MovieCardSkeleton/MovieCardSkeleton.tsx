"use client";
import "./MovieCardSkeleton.css";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";
import Like from "@/features/shared/Like/Like";

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="MovieCardSkeleton">
      <article className="poster"></article>
      <article className="title">
        <h2>▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮ ▮▮▮</h2>
        <p>▮▮▮▮▮▮▮▮▮▮ ▮▮, ▮▮▮▮</p>
      </article>
      <section>
        <div>
          <p>Rating</p>
          <CircularProgressWithLabel value={100} size="25px" textsize="9px" />
        </div>
        <div>
          <p>Favorites</p>
          <Like />
        </div>
      </section>
    </div>
  );
};

export default MovieCardSkeleton;
