"use server";
import { Suspense } from "react";
import "./Header.css";
import MovieBanner from "./MovieBanner/MovieBanner";
import MovieBannerSkeleton from "./MovieBannerSkeleton/MovieBannerSkeleton";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <Suspense fallback={<MovieBannerSkeleton />}>
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
      </Suspense>
    </header>
  );
};

export default Header;
