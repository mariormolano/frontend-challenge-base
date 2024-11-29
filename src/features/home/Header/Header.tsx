"use client";
import MovieBanner from "./MovieBanner/MovieBanner";
import { useStore } from "exome/react";
import { authStore } from "@/core/storage/auth.store";
import { useEffect } from "react";
import { moviesStore } from "@/core/storage/movies.store";

const apiurlImage = "https://image.tmdb.org/t/p/original";

const Header = (): JSX.Element => {
  const { getSession } = useStore(authStore);
  const { popularMovies } = useStore(moviesStore);

  useEffect(() => {
    getSession();
  }, [getSession]);

  const title = popularMovies[1]?.title
    ? popularMovies[1].title
    : "Lorem ipsum dolor sit";
  const desciption = popularMovies[1]?.overview
    ? popularMovies[1].overview
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut luctus nulla. Sed sollicitudin fermentum maximus. Sed congue velit gravida justo mattis, quis cursus purus rhoncus. Donec lacus ex, auctor ullamcorper";
  const urlImage = popularMovies[1]?.backdrop_path
    ? apiurlImage + popularMovies[1].backdrop_path
    : "";
  return (
    <header
      style={
        popularMovies[1]?.backdrop_path
          ? {
              background: `url(${urlImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <MovieBanner title={title} description={desciption} value={50} />
    </header>
  );
};

export default Header;
