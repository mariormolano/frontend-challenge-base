"use client";
import MovieBanner from "./MovieBanner/MovieBanner";
import { useStore } from "exome/react";
import { authStore } from "@/core/storage/auth.store";
import { useEffect, useRef } from "react";
import { moviesStore } from "@/core/storage/movies.store";

const apiurlImage = "https://image.tmdb.org/t/p/original";

const Header = (): JSX.Element => {
  const { getSession } = useStore(authStore);
  const { selectedMovie } = useStore(moviesStore);
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSession();
  }, [getSession]);

  const title = selectedMovie ? selectedMovie.title : "▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮ ▮▮▮";
  const desciption = selectedMovie
    ? selectedMovie.overview
    : "▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮, ▮▮ ▮▮▮ ▮▮▮▮▮ ▮▮. ▮▮▮▮ ▮▮ ▮▮▮▮▮▮ ▮▮▮▮▮." +
      " ▮▮▮ ▮▮▮▮▮ ▮ ▮▮▮▮▮. ▮▮▮ ▮▮▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮▮▮▮▮.";
  const urlImage = selectedMovie
    ? apiurlImage + selectedMovie.backdrop_path
    : "";
  if (background.current) {
    background.current.style.backgroundImage = `url('${urlImage}')`;
  }
  return (
    <header ref={background}>
      <MovieBanner
        title={title}
        description={desciption}
        value={selectedMovie ? selectedMovie.vote_average * 10 : 50}
      />
    </header>
  );
};

export default Header;
