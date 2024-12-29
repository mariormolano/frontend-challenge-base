"use server";
import "./MovieList.css";
import HorizontalMovieList from "./HorizontalMovieList/HorizontalMovieList";
import FullMovieList from "./FullMovieList/FullMovieList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
          <HorizontalMovieList category={category} />
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
