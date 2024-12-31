import { useEffect, useState } from "react";
import { useStore } from "exome/react";
import { Movie } from "../interfaces/movie.interface";
import { favoritesStore } from "../storage/favs.store";

interface LikeData {
  movie: Movie;
  like: boolean;
}

const useLikeStore = (movie?: Movie): [boolean, (like: boolean) => void] => {
  const [likeSelect, setLikeSelect] = useState(false);
  const { setFavoritesCount, favoritesCount } = useStore(favoritesStore);

  useEffect(() => {
    if (!movie?.id) {
      setLikeSelect(true);
    }
  }, [movie?.id]);

  useEffect(() => {
    try {
      const data: string | null = localStorage.getItem(
        movie?.id?.toString() ?? "",
      );
      if (data) {
        const likeData: LikeData = JSON.parse(data);
        if (likeData.movie.id === movie?.id) {
          setLikeSelect(likeData.like);
        } else {
          setLikeSelect(false);
        }
      } else {
        setLikeSelect(false);
      }
    } catch (error) {
      setLikeSelect(false);
    }
  }, [movie?.id]);

  const changeLike = (like: boolean): void => {
    try {
      if (movie) {
        const data: LikeData = {
          movie,
          like,
        };
        setLikeSelect(like);
        const likeList: number[] = JSON.parse(
          localStorage.getItem("likeList") ?? "[]",
        );
        if (!like) {
          localStorage.removeItem(movie.id.toString());
          setFavoritesCount(favoritesCount - 1);
          localStorage.setItem(
            "likeList",
            JSON.stringify(likeList.filter((id) => id !== movie.id)),
          );
        } else {
          localStorage.setItem(movie.id.toString() ?? "", JSON.stringify(data));
          const tempLikeList = [...likeList];
          tempLikeList.push(movie.id);
          setFavoritesCount(tempLikeList.length);
          localStorage.setItem("likeList", JSON.stringify(tempLikeList));
        }
      }
    } catch (error) {
      setLikeSelect(false);
    }
  };

  return [likeSelect, changeLike];
};

export default useLikeStore;
