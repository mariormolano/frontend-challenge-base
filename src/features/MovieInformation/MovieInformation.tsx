"use server";
import "./MovieInformation.css";
import MovieData from "./MovieData/MovieData";
import { getMovie } from "@/core/services/movies.service";

const MovieInformation: React.FC = () => {
  return (
    <header className="MovieInformation">
      <MovieData
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

export default MovieInformation;
