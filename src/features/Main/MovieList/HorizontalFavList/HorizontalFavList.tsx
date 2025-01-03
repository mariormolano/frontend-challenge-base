"use client";
import "./HorizontalFavList.css";
import { useEffect, useRef, useState } from "react";
import { useStore } from "exome/react";
import useGetFavorites from "@/core/hooks/useGetFavorites";
import MovieCardSkeleton from "../../../shared/MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "../../../shared/MovieCard/MovieCard";
import { favoritesStore } from "@/core/storage/favs.store";

const HorizontalFavList: React.FC = () => {
  const { favoritesCount } = useStore(favoritesStore);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { favoritesState: favorites, getFavorites } = useGetFavorites();

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
    getFavorites();
  }, [favoritesCount]);

  return (
    <button
      className="HorizontalFavList"
      ref={scrollRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div style={{ display: "none" }} />
      {favorites ? (
        favorites.map((movie) => {
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
    </button>
  );
};

export default HorizontalFavList;
