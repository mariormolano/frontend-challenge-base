import { useStore } from "exome/react";
import { genres } from "@/core/list/genres.list";
import { searchStore } from "@/core/storage/search.store";
import Search from "@mui/icons-material/Search";

const SearchBar = (): JSX.Element => {
  const { setGenre, search, setSearch, setSearchMovies } =
    useStore(searchStore);
  return (
    <aside className="SearchBar">
      <form>
        <span>
          <label htmlFor="search">Search</label>
          <div>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Keywords"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (search.length > 0) {
                  setSearchMovies();
                }
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" && search.length > 0) {
                  setSearchMovies();
                }
              }}
            >
              <Search />
            </button>
          </div>
        </span>
        <span>
          <label htmlFor="genres">Genres</label>
          <select onChange={(e) => setGenre(e.target.value)} id="genres">
            <option value="none">————————————</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </span>
      </form>
    </aside>
  );
};

export default SearchBar;
