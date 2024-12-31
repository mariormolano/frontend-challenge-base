import { Exome } from "exome";

class FavoritesStore extends Exome {
  public favoritesCount: number = 0;

  public setFavoritesCount(count: number): void {
    this.favoritesCount = count;
  }
}

export const favoritesStore = new FavoritesStore();
