"use client";
import "./MovieDataSkeleton.css";

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
    </article>
  );
};

export default MovieDataSkeleton;
