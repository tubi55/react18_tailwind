import clsx from "clsx";
import { useGlobalData } from "../hooks/useGlobalData";
import { useRef } from "react";

const Btns = () => {
  const myID = useRef("197119297@N02");
  const { FlickrType, setFlickrType } = useGlobalData();

  const handleClick = (type) => {
    type === "interest"
      ? setFlickrType({ type: "interest" })
      : setFlickrType({ type: "user", id: myID.current, isProfile: false });
  };

  return (
    <nav className="flex gap-6 mb:w-full mb:justify-between">
      {["user", "interest"].map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type)}
          className={clsx(
            "btn",
            FlickrType.type === type && !FlickrType.isProfile && "on"
          )}
        >
          {type === "user" ? "My Gallery" : "Interest Gallery"}
        </button>
      ))}
    </nav>
  );
};

export default Btns;
