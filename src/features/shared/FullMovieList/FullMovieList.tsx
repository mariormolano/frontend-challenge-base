"use client";
import "./FullMovieList.css";
import { Movie } from "@/core/interfaces/movie.interface";
import { MovieResponse } from "@/core/interfaces/movieresponse.interface";
import MovieCard from "@/features/shared/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import MovieCardSkeleton from "@/features/shared/MovieCardSkeleton/MovieCardSkeleton";
import { Query } from "@/core/interfaces/query.interface";

interface Props {
  movies?: Promise<MovieResponse>;
  query?: Query;
}

const FullMovieList: React.FC<Props> = ({ movies, query }) => {
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const [pages, setPages] = useState<number>(1);
  useEffect(() => {
    movies?.then((data: MovieResponse) => {
      setMovieList(data.results);
      setPages(data.total_pages);
    });
  }, []);

  const pager: JSX.Element[] = [];
  for (let i = 1; i <= pages; i++) {
    pager.push(
      <a
        key={i}
        href={`/search?moviename=${query?.moviename}&page=${i}&genres=${query?.genres}`}
      >
        {i}
      </a>,
    );
  }

  return (
    <>
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
      {pager ? <div className="FullMovieListPager">{pager}</div> : null}
    </>
  );
};

export default FullMovieList;
