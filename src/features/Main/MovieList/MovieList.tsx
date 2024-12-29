"use server";
import "./MovieList.css";
import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "./FullMovieList/FullMovieList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getMovieList } from "@/core/services/movies.service";

interface Props {
  category: string;
  title: string;
  type: string;
}

const MovieList: React.FC<Props> = ({ category, title, type }) => {
  return (
    <div className="MovieList">
      {type === "horizontal" ? (
        <span>
          <h2>{title}</h2>
          <HorizontalMovieList
            title={category}
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
          <button>
            <ArrowBackIcon />
          </button>
          <h2>{title}</h2>
          <FullMovieList />
        </span>
      )}
    </div>
  );
};

export default MovieList;
