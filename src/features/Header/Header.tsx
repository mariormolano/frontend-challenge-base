"use client";
import "./Header.css";
import MovieBanner from "./MovieBanner/MovieBanner";
import { useStore } from "exome/react";
import { moviesStore } from "@/core/storage/movies.store";

const apiurlImage = "https://image.tmdb.org/t/p/original";

const Header = (): React.ReactElement => {
  const { selectedMovie } = useStore(moviesStore);

  // useEffect(() => {
  //   getSession();
  // }, [getSession]);

  const title = selectedMovie ? selectedMovie.title : "▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮ ▮▮▮";
  const desciption = selectedMovie
    ? selectedMovie.overview
    : "▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮, ▮▮ ▮▮▮ ▮▮▮▮▮ ▮▮. ▮▮▮▮ ▮▮ ▮▮▮▮▮▮ ▮▮▮▮▮." +
      " ▮▮▮ ▮▮▮▮▮ ▮ ▮▮▮▮▮. ▮▮▮ ▮▮▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮▮▮▮▮.";
  const urlImage = selectedMovie
    ? apiurlImage + selectedMovie.backdrop_path
    : "";

  return (
    <header className="Header">
      <MovieBanner
        title={title}
        description={desciption}
        bannerImage={urlImage}
        value={selectedMovie ? selectedMovie.vote_average * 10 : 50}
      />
    </header>
  );
};

export default Header;
