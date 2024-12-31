"use client";
import "./HorizontalMovieList.css";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { Movie } from "@/core/interfaces/movie.interface";

interface Props {
  movie: Promise<Movie[]>;
}

const HorizontalMovieList: React.FC<Props> = ({ movie }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [movieList, setMovieList] = useState<Movie[] | null>(null);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
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

  useEffect(() => {
    movie.then(setMovieList);
  }, []);

  return (
    <div
      className="HorizontalMovieList"
      ref={scrollRef}
      onMouseOver={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <img alt="" style={{ display: "none" }} />
      {movieList ? (
        movieList.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <>
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </>
      )}
    </div>
  );
};

export default HorizontalMovieList;
