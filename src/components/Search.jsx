import { LuSearch } from "react-icons/lu";
import { useGlobalData } from "../hooks/useGlobalData";

const Search = () => {
  const { setFlickrType } = useGlobalData();
  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.children[0].value;
    if (!keyword.trim()) return;
    e.target.children[0].value = "";
    setFlickrType({ type: "search", keyword: keyword });
  };
  return (
    <form className="flex items-center gap-3 mb:w-full" onSubmit={handleSearch}>
      <input type="text" placeholder="Search" />

      <button className="-translate-x-8 btnSearch">
        <LuSearch />
      </button>
    </form>
  );
};

export default Search;
