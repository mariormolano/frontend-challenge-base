"use client";
import "./HorizontalMovieList.css";
import { useEffect, useState } from "react";
import useDragscroll from "@/core/hooks/useDragscroll";
import MovieCardSkeleton from "../../../shared/MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "../../../shared/MovieCard/MovieCard";
import { Movie } from "@/core/interfaces/movie.interface";

interface Props {
  movie: Promise<Movie[]>;
}

const HorizontalMovieList: React.FC<Props> = ({ movie }) => {
  const { scrollRef, drag } = useDragscroll();
  const [movieList, setMovieList] = useState<Movie[] | null>(null);

  useEffect(() => {
    movie.then(setMovieList);
  }, []);

  return (
    <div className="HorizontalMovieList" ref={scrollRef}>
      <div style={{ display: "none" }} />
      {movieList ? (
        movieList.map((movie) => {
          return <MovieCard drag={drag} key={movie.id} movie={movie} />;
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
