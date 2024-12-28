"use server";
import "./SearchBar.css";
import { genres } from "@/core/list/genres.list";
import Search from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
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
            />
            <button>
              <Search />
            </button>
          </div>
        </span>
        <span>
          <label htmlFor="genres">Genres</label>
          <select id="genres">
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
