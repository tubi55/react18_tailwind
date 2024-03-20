import FilterBar from "./FilterBar";

const Header = () => {
  return (
    <header>
      <h1 className="text-[6vmax] font-light mb-10 leading-[0.8] text-balck/20 mt-20 web:mt-10 mb:text-[14vmin] ">
        Flickr <span className="text-[4vmax] opacity-50 web:text-[6vmax] mb:text-[14vmin]">Gallery</span>
      </h1>
      <FilterBar />
    </header>
  );
};

export default Header;
