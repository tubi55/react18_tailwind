import { useState } from "react";
import clsx from "clsx";

const Btns = () => {
  const [Index, setIndex] = useState(0);

  const handleClick = (idx) => {
    setIndex(idx);
  };

  return (
    <nav className="flex w-full gap-6 mb-10">
      {["My Gallery", "Interest Gallery"].map((txt, idx) => (
        <button
          key={txt}
          onClick={() => handleClick(idx)}
          className={clsx("btn", idx === Index && "on")}
        >
          {txt}
        </button>
      ))}
    </nav>
  );
};

export default Btns;
