import { useState } from "react";
import { useStore } from "exome/react";
import { Movie } from "../interfaces/movie.interface";
import { favoritesStore } from "../storage/favs.store";
interface MovieStore {
  like: boolean;
  movie: Movie;
}
interface UseGetFavoritesReturn {
  favoritesState: Movie[];
  getFavorites: () => void;
}

const useGetFavorites = (): UseGetFavoritesReturn => {
  const { setFavoritesCount } = useStore(favoritesStore);
  const [favoritesState, setFavoritesState] = useState<Movie[]>([]);
  const favoritesList: Movie[] = [];
  const getFavorites = (): void => {
    try {
      favoritesList.length = 0;
      const favorites = JSON.parse(localStorage.getItem("likeList") ?? "[]");
      if (favorites.length > 0) {
        favorites.map((id: number) => {
          const movie: MovieStore = JSON.parse(
            localStorage.getItem(id.toString()) ?? "",
          );
          favoritesList.push(movie.movie);
        });
      }
      setFavoritesCount(favoritesList.length);
      setFavoritesState(favoritesList);
    } catch (error) {
      setFavoritesState([]);
    }
  };
  return { favoritesState, getFavorites };
};

export default useGetFavorites;
