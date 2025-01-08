"use client";
import "./HorizontalFavList.css";
import { useEffect } from "react";
import useDragscroll from "@/core/hooks/useDragscroll";
import { useStore } from "exome/react";
import useGetFavorites from "@/core/hooks/useGetFavorites";
import MovieCardSkeleton from "../../../shared/MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "../../../shared/MovieCard/MovieCard";
import { favoritesStore } from "@/core/storage/favs.store";

const HorizontalFavList: React.FC = () => {
  const { favoritesCount } = useStore(favoritesStore);
  const { scrollRef, drag } = useDragscroll();
  const { favoritesState: favorites, getFavorites } = useGetFavorites();

  useEffect(() => {
    getFavorites();
  }, [favoritesCount]);

  return (
    <div className="HorizontalFavList" ref={scrollRef}>
      <div style={{ display: "none" }} />
      {favorites ? (
        favorites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} drag={drag} />;
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

export default HorizontalFavList;
