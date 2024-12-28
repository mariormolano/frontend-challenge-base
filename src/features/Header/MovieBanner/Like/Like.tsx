"use client";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useState } from "react";

const Like: React.FC = () => {
  const [likeSelect, setLikeSelect] = useState(false);
  return (
    <>
      {likeSelect ? (
        <Favorite
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => setLikeSelect(false)}
        />
      ) : (
        <FavoriteBorder
          sx={{ color: "white", cursor: "pointer" }}
          onClick={() => setLikeSelect(true)}
        />
      )}
    </>
  );
};

export default Like;
