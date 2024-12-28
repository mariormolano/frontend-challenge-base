import "./HorizontalMovieList.css";
import { Movie } from "@/core/interfaces/movie.interface";
import MovieCard from "../MovieCard/MovieCard";
import { useRef, useState } from "react";

const HorizontalMovieList = (props: { movies: Movie[] }): JSX.Element => {
  const { movies } = props;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
      const x = e.pageX - scrollRef.current.offsetLeft;
      const slide = x - startX;
      scrollRef.current.scrollLeft = scrollLeft - slide;
    }
  };

  const handleMouseUpOrLeave = (): void => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = "default";
  };
  return (
    <article
      className="HorizontalMovieList"
      ref={scrollRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      role="presentation"
    >
      {movies?.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </article>
  );
};

export default HorizontalMovieList;
