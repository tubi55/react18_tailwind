import FilterBar from "./FilterBar";

const Header = () => {
  return (
    <header>
      <h1 className="text-[6vmax] font-light mb-10 leading-[0.8] text-balck/20 ">
        Flickr <span className="text-[4vmax] opacity-50">Gallery</span>
      </h1>
      <FilterBar />
    </header>
  );
};

export default Header;
