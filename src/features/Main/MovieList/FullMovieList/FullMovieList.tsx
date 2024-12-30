"use client";
import "./FullMovieList.css";
import { Movie } from "@/core/interfaces/movie.interface";
import { MovieResponse } from "@/core/interfaces/movieresponse.interface";
import MovieCard from "@/features/Main/MovieList/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";

interface Props {
  movies?: Promise<MovieResponse>;
}

const FullMovieList: React.FC<Props> = ({ movies }) => {
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  useEffect(() => {
    movies?.then((data: MovieResponse) => setMovieList(data.results));
  }, []);

  return (
    <article className="FullMovieList">
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
    </article>
  );
};

export default FullMovieList;
