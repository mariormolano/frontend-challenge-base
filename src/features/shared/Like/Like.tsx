"use client";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import useLikeStore from "@/core/hooks/useLikeStore";
import { Movie } from "@/core/interfaces/movie.interface";

interface Props {
  movie?: Movie;
  size?: number;
}

const Like: React.FC<Props> = ({ movie, size }) => {
  const [likeSelect, changeLike] = useLikeStore(movie);
  return (
    <aside>
      {likeSelect ? (
        <Favorite
          sx={{ color: "white", cursor: "pointer", fontSize: size }}
          onClick={() => (movie?.id ? changeLike(false) : null)}
        />
      ) : (
        <FavoriteBorder
          sx={{ color: "white", cursor: "pointer", fontSize: size }}
          onClick={() => (movie?.id ? changeLike(true) : null)}
        />
      )}
    </aside>
  );
};

export default Like;
