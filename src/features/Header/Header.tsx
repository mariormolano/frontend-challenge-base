"use server";
import "./Header.css";
import MovieBanner from "./MovieBanner/MovieBanner";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <MovieBanner
        data={
          new Promise((resolve) => {
            setTimeout(() => {
              fetch(
                "https://api.themoviedb.org/3/movie/550?api_key=c0947635dbf419eb068a3fd9ddc580bd",
              ).then((response) => {
                resolve(response.json());
              });
            }, 5000);
          })
        }
      />
    </header>
  );
};

export default Header;
