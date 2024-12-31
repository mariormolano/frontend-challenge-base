"use server";
import "./MovieList.css";
import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "./FullMovieList/FullMovieList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getMovieList } from "@/core/services/movies.service";
import { Query } from "@/core/interfaces/query.interface";
import { getMoviesWithConditionals } from "@/core/services/getmovies.service";
import Link from "next/link";

interface Props {
  category: string;
  title: string;
  type: string;
  query?: Query;
}

const MovieList: React.FC<Props> = ({ category, title, type, query }) => {
  return (
    <div className="MovieList">
      {type === "horizontal" ? (
        <span>
          <h2>{title}</h2>
          <HorizontalMovieList
            movie={
              new Promise((resolve) => {
                setTimeout(() => {
                  getMovieList(category, 1).then((data) => resolve(data));
                }, 5000);
              })
            }
          />
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
