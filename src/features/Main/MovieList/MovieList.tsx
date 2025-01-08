"use server";
import "./MovieList.css";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getMovieList } from "@/core/services/movies.service";
//import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "@/features/shared/FullMovieList/FullMovieList";
import HorizontalFavList from "./HorizontalFavList/HorizontalFavList";
import { getMoviesWithConditionals } from "@/core/services/getmovies.service";
import { Query } from "@/core/interfaces/query.interface";
import React, { Suspense } from "react";
import HorizontalMovieListSkeleton from "./HorizontalMovieListSkeleton/HorizontalMovieListSkeleton";

interface Props {
  category: string;
  title: string;
  type: string;
  query?: Query;
}

const HorizontalMovieList = React.lazy(
  () => import("./HorizontalMovieList/HorizontalMovieList"),
);

const MovieList: React.FC<Props> = ({ category, title, type, query }) => {
  return (
    <div className="MovieList">
      {type === "horizontal" ? (
        <span>
          <h2>{title}</h2>

          {category === "favorites" ? (
            <HorizontalFavList />
          ) : (
            <Suspense fallback={<HorizontalMovieListSkeleton />}>
              <HorizontalMovieList
                movie={
                  new Promise((resolve) => {
                    setTimeout(() => {
                      getMovieList(category, 1).then((data) => resolve(data));
                    }, 5000);
                  })
                }
              />
            </Suspense>
          )}
        </span>
      ) : (
        <span>
          <Link href="/">
            <button>
              <ArrowBackIcon />
            </button>
          </Link>
          <h2>{title}</h2>
          <FullMovieList
            query={query}
            movies={
              new Promise((resolve) => {
                setTimeout(() => {
                  getMoviesWithConditionals(
                    query?.page ? parseInt(query.page) : 1,
                    query?.genres ? parseInt(query.genres) : 0,
                    query?.moviename ?? "",
                  ).then((data) => resolve(data));
                }, 5000);
              })
            }
          />
        </span>
      )}
    </div>
  );
};

export default MovieList;
