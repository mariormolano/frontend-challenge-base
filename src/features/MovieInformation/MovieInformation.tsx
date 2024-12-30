"use server";
import "./MovieInformation.css";
import MovieData from "./MovieData/MovieData";
import { getInfoMovie } from "@/core/services/movies.service";

interface Props {
  id: number;
}

const MovieInformation: React.FC<Props> = ({ id }) => {
  return (
    <header className="MovieInformation">
      <MovieData
        data={
          new Promise((resolve) => {
            setTimeout(() => {
              getInfoMovie(id).then((response) => {
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
