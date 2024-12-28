"use client";
import "./Header.css";
import MovieBanner from "./MovieBanner/MovieBanner";
import { useStore } from "exome/react";
import { moviesStore } from "@/core/storage/movies.store";

const apiUrlImage = "https://image.tmdb.org/t/p/original";

const Header: React.FC = () => {
  const { selectedMovie } = useStore(moviesStore);

  const title = selectedMovie ? selectedMovie.title : "▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮ ▮▮▮";
  const description = selectedMovie
    ? selectedMovie.overview
    : "▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮, ▮▮ ▮▮▮ ▮▮▮▮▮ ▮▮. ▮▮▮▮ ▮▮ ▮▮▮▮▮▮ ▮▮▮▮▮." +
      " ▮▮▮ ▮▮▮▮▮ ▮ ▮▮▮▮▮. ▮▮▮ ▮▮▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮▮▮▮▮.";
  const urlImage = selectedMovie
    ? apiUrlImage + selectedMovie.backdrop_path
    : "";

  return (
    <header className="Header">
      <MovieBanner
        title={title}
        description={description}
        bannerImage={urlImage}
        value={selectedMovie ? selectedMovie.vote_average * 10 : 50}
      />
    </header>
  );
};

export default Header;
