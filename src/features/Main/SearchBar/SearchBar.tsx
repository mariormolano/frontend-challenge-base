"use server";
import "./SearchBar.css";
import { genres } from "@/core/mockups/genres.list";
import Search from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
  // const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();
  //   const search = (event.currentTarget as HTMLFormElement).search.value;
  //   const genres = (event.currentTarget as HTMLFormElement).genres.value;
  //   console.log(search, genres);
  // };
  return (
    <aside className="SearchBar">
      {/* <form onSubmit={handleSearch}> */}
      <form action="/search" method="get">
        <span>
          <label htmlFor="moviename">Search</label>
          <div>
            <input
              type="text"
              id="moviename"
              name="moviename"
              placeholder="Keywords"
              required
            />
            <input type="hidden" name="page" value="1" />
            <button type="submit">
              <Search />
            </button>
          </div>
        </span>
        <span>
          <label htmlFor="genres">Genres</label>
          <select id="genres" name="genres">
            <option value="none">————————————</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
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
