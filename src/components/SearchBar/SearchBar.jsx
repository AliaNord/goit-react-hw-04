import s from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    onSubmit(value);
  };
  return (
    <form className={s.searchForm} onSubmit={formSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
