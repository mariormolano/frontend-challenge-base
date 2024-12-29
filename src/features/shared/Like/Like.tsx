"use client";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import useLikeStore from "@/core/hooks/useLikeStore";

interface Props {
  id?: number;
}

const Like: React.FC<Props> = ({ id }) => {
  const [likeSelect, changeLike] = useLikeStore(id);

  return (
    <aside>
      {likeSelect ? (
        <Favorite
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => (id ? changeLike(false) : null)}
        />
      ) : (
        <FavoriteBorder
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => (id ? changeLike(true) : null)}
        />
      )}
    </aside>
  );
};

export default Like;
