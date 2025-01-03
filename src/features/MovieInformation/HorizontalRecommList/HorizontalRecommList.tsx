"use client";
import "./HorizontalRecommList.css";
import MovieCardSkeleton from "@/features/shared/MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "@/features/shared/MovieCard/MovieCard";
import { useRef, useState } from "react";
import { Recommendations } from "@/core/interfaces/recommendations.interface";

interface Props {
  movie: Recommendations[];
}

const HorizontalRecommList: React.FC<Props> = ({ movie }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  return (
    <div
      className="HorizontalRecommList"
      ref={scrollRef}
      onMouseOver={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <img alt="" style={{ display: "none" }} />
      {movie ? (
        movie.map((movie) => {
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

export default HorizontalRecommList;
