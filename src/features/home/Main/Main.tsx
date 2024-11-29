"use client";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "@/features/shared/MovieList/MovieList";
import { useStore } from "exome/react";
import { moviesStore } from "@/core/storage/movies.store";
import { useEffect } from "react";
const Main = (): JSX.Element => {
  const { popularMovies, setPopularMovies } = useStore(moviesStore);
  const { nowPlayingMovies, setNowPlayingMovies } = useStore(moviesStore);
  const { upcomingMovies, setUpcomingMovies } = useStore(moviesStore);
  const { topRatedMovies, setTopRatedMovies } = useStore(moviesStore);
  const { favoriteMovies, setFavoriteMovies } = useStore(moviesStore);

  useEffect(() => {
    setPopularMovies(1);
    setNowPlayingMovies(1);
    setUpcomingMovies(1);
    setTopRatedMovies(1);
    setFavoriteMovies(1);
  }, []);

  return (
    <main>
      <SearchBar />
      <section>
        <MovieList movies={popularMovies} title="Popular" />
        <MovieList movies={nowPlayingMovies} title="Now Paying" />
        <MovieList movies={upcomingMovies} title="Upcoming" />
        <MovieList movies={topRatedMovies} title="Top Rated" />
        <MovieList movies={favoriteMovies} title="Favorites" />
      </section>
    </main>
  );
};

export default Main;
