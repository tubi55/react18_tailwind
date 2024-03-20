import clsx from "clsx";
import { useGlobalData } from "../hooks/useGlobalData";
import { useRef } from "react";

const Btns = () => {
  const myID = useRef("197119297@N02");
  const { FlickrType, setFlickrType } = useGlobalData();

  const handleClick = (type) => {
    type === "interest"
      ? setFlickrType({ type: "interest" })
      : setFlickrType({ type: "user", id: myID.current });
  };

  return (
    <nav className="flex w-full gap-6 mb-10">
      {["user", "interest"].map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type)}
          className={clsx("btn", FlickrType.type === type && "on")}
        >
          {type === "user" ? "My Gallery" : "Interest Gallery"}
        </button>
      ))}
    </nav>
  );
};

export default Btns;
