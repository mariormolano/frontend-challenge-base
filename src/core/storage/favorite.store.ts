import { Exome } from "exome";
import { favoriteMoviesProtected } from "../services/movies.service";
import { Movie } from "../interfaces/movie.interface";

class FavoriteStore extends Exome {
  public favorites: Movie[] = [];

  public addFavorite(id: string): void {
    //this.favorites.push(id);
  }

  public removeFavorite(id: string): void {
    //this.favorites = this.favorites.filter((favorite) => favorite !== id);
  }

  public getFavorites(): void {
    const Response: Movie[] = favoriteMoviesProtected();
    this.favorites = Response;
    //console.log("Respuesta: ", Response);
  }
}

export const favoriteStore = new FavoriteStore();
