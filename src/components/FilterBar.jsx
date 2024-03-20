import React from "react";
import Btns from "./Btns";
import Search from "./Search";

const FilterBar = () => {
  return (
    <section className="flex flex-wrap content-center justify-between w-full gap-10 mb-8">
      <Btns />
      <Search />
    </section>
  );
};

export default FilterBar;
