"use client";
import "./MovieDataSkeleton.css";
import Like from "../../shared/Like/Like";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";

const MovieDataSkeleton: React.FC = () => {
  const title = "▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮ ▮▮▮";
  const description =
    "▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮, ▮▮ ▮▮▮ ▮▮▮▮▮ ▮▮. ▮▮▮▮ ▮▮ ▮▮▮▮▮▮ ▮▮▮▮▮." +
    " ▮▮▮ ▮▮▮▮▮ ▮ ▮▮▮▮▮. ▮▮▮ ▮▮▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮▮▮▮▮.";
  return (
    <article className="MovieDataSkeleton">
      <section className="MovieDataSkeletonDescription">
        <dl>
          <dt>
            <h1>{title}</h1>
          </dt>
          <dd>{description}</dd>
        </dl>
      </section>
      <aside>
        <Like />
        <CircularProgressWithLabel value={100} textsize="25px" size="92px" />
      </aside>
    </article>
  );
};

export default MovieDataSkeleton;
