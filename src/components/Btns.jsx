import clsx from "clsx";
import { useGlobalData } from "../hooks/useGlobalData";

const Btns = () => {
  const { FlickrType, setFlickrType } = useGlobalData();

  const handleClick = (type) => {
    setFlickrType(type);
  };

  return (
    <nav className="flex w-full gap-6 mb-10">
      {["basic", "interest"].map((type) => (
        <button
          key={type}
          onClick={() => handleClick(type)}
          className={clsx("btn", FlickrType === type && "on")}
        >
          {type === "basic" ? "My Gallery" : "Interest Gallery"}
        </button>
      ))}
    </nav>
  );
};

export default Btns;
