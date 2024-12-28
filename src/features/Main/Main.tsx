"use client";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "@/features/Main/MovieList/MovieList";
import { useStore } from "exome/react";
import { moviesStore } from "@/core/storage/movies.store";
import { searchStore } from "@/core/storage/search.store";
import { favoriteStore } from "@/core/storage/favorite.store";
import { useEffect } from "react";
const Main = (): JSX.Element => {
  const { popularMovies, setPopularMovies, moviesStatus } =
    useStore(moviesStore);
  const { searchStatus, moviesResult } = useStore(searchStore);
  const { nowPlayingMovies, setNowPlayingMovies } = useStore(moviesStore);
  const { upcomingMovies, setUpcomingMovies } = useStore(moviesStore);
  const { topRatedMovies, setTopRatedMovies } = useStore(moviesStore);
  const { favoriteMovies, setFavoriteMovies } = useStore(moviesStore);

  const { getFavorites } = useStore(favoriteStore);
  useEffect(() => {
    if (!moviesStatus) {
      setPopularMovies(1);
      setNowPlayingMovies(1);
      setUpcomingMovies(1);
      setTopRatedMovies(1);
      setFavoriteMovies(1);
      getFavorites();
    }
  }, [moviesStatus]);

  return (
    <main>
      <SearchBar />
      <section>
        {searchStatus ? (
          <MovieList
            movies={moviesResult}
            title={"Search result"}
            type="full"
          />
        ) : (
          <>
            <MovieList
              movies={popularMovies}
              title="Popular"
              type="horizontal"
            />
            <MovieList
              movies={nowPlayingMovies}
              title="Now Playing"
              type="horizontal"
            />
            <MovieList
              movies={upcomingMovies}
              title="Upcoming"
              type="horizontal"
            />
            <MovieList
              movies={topRatedMovies}
              title="Top Rated"
              type="horizontal"
            />
            <MovieList
              movies={favoriteMovies}
              title="Favorites"
              type="horizontal"
            />
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
