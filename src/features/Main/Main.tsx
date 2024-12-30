"use server";
import { Query } from "@/core/interfaces/query.interface";
import "./Main.css";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "@/features/Main/MovieList/MovieList";

interface Props {
  query?: Query;
}

const Main: React.FC<Props> = ({ query }) => {
  const searchStatus = !!query;

  return (
    <main className="Main">
      <SearchBar />
      <section>
        {searchStatus ? (
          <MovieList
            category={""}
            title={"Search result"}
            type="full"
            query={query}
          />
        ) : (
          <>
            <MovieList category={"popular"} title="Popular" type="horizontal" />
            <MovieList
              category={"now_playing"}
              title="Now Playing"
              type="horizontal"
            />
            <MovieList
              category={"upcoming"}
              title="Upcoming"
              type="horizontal"
            />
            <MovieList
              category={"top_rated"}
              title="Top Rated"
              type="horizontal"
            />
            <MovieList
              category={"favorites"}
              title="Favorites"
              type="horizontal"
            />
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
