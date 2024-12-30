import { Exome } from "exome";
import { genres } from "@/core/mockups/genres.list";
import { searchMovies } from "../services/movies.service";
import { Movie } from "../interfaces/movie.interface";

class SearchStore extends Exome {
  public search: string = "";
  public searchStatus: boolean = false;
  public genre: string = "";
  public moviesResult: Movie[] = [];
  public orderBy: "" | "popularity" | "title" = "";
  public genreID: number =
    genres.find((genre) => genre.name === this.genre)?.id ?? 0;

  public setSearch(search: string): void {
    this.search = search;
  }

  public setOrderBy(orderBy: "" | "popularity" | "title"): void {
    this.orderBy = orderBy;
  }

  public setGenre(genre: string): void {
    this.genre = genre;
    this.genreID = genres.find((genre) => genre.name === this.genre)?.id ?? 0;
  }

  public async setSearchMovies(page: number = 1): Promise<void> {
    this.moviesResult = await searchMovies(
      page,
      this.genreID,
      this.search,
    ).then((movies) => {
      this.searchStatus = true;

      return movies;
    });
  }
}

export const searchStore = new SearchStore();
