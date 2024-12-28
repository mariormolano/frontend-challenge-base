"use client";
import "./MovieBanner.css";
import { useRef } from "react";
import Like from "./Like/Like";
import CircularProgressWithLabel from "@/features/shared/CircularProgressWithLabel/CircularProgressWithLabel";

interface Props {
  title: string;
  description: string;
  value: number;
  bannerImage: string;
}

const MovieBanner: React.FC<Props> = ({
  title,
  description,
  value,
  bannerImage,
}) => {
  const background = useRef<HTMLDivElement>(null);
  if (background.current) {
    background.current.style.backgroundImage = `url('${bannerImage}')`;
  }
  return (
    <article ref={background} className="MovieBanner">
      <section className="MovieBannerDescription">
        <dl>
          <dt>
            <h1>{title}</h1>
          </dt>
          <dd>{description}</dd>
        </dl>
      </section>
      <aside>
        <Like />
        <CircularProgressWithLabel value={value} textsize="30px" size="92px" />
      </aside>
    </article>
  );
};

export default MovieBanner;
