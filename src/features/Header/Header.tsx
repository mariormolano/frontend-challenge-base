"use server";
import { getMovie } from "@/core/services/movies.service";
import "./Header.css";
import MovieBanner from "./MovieBanner/MovieBanner";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <MovieBanner
        data={
          new Promise((resolve) => {
            setTimeout(() => {
              getMovie(550).then((response) => {
                resolve(response);
              });
            }, 5000);
          })
        }
      />
    </header>
  );
};

export default Header;
