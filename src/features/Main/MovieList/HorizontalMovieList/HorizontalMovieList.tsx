"use client";
import "./HorizontalMovieList.css";
//import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";
import { useRef, useState } from "react";
import { popularMovies } from "@/core/services/movies.service";

interface Props {
  category: string;
}

const HorizontalMovieList: React.FC<Props> = ({ category }) => {
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

  if (category === "popular") {
    popularMovies(1).then((movies) => {
      //console.log(movies);
    });
  }

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
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
    </article>
  );
};

export default HorizontalMovieList;
