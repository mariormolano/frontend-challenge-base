const SearchBar = (): JSX.Element => {
  return (
    <aside>
      <form action="">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" name="search" placeholder="Keywords" />
        <label htmlFor="generes">Generes</label>
      </form>
    </aside>
  );
};

export default SearchBar;
