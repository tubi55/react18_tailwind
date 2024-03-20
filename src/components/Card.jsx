import { useGlobalData } from "../hooks/useGlobalData";

const Card = ({ data }) => {
  const { setFlickrType } = useGlobalData();

  const handleProfile = (e) => {
    setFlickrType({ type: "user", id: e.target.innerText, isProfile: true });
  };

  return (
    <article className="w-[calc((100%-(20px*4))/5)] mb-16 transition duration-300">
      {/* thumbnail box */}
      <figure className="picFrame h-[16vmax] mb-2 ">
        <img
          src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`}
          alt={data.title}
        />
      </figure>

      {/* image title */}
      <h3 className="mb-6 min-h-14 text-md text-slate-800">
        {data.title ? data.title : "Have a good day!"}
      </h3>

      {/* user profile box */}
      <div className="flex items-end w-full gap-2 py-2 text-xs text-orange-400 border-t border-b cursor-pointer border-slate-300">
        <img
          className="w-10"
          src={`http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg`}
          alt="profile"
          onError={(e) =>
            e.target.setAttribute(
              "src",
              "https://www.flickr.com/images/buddyicon.gif"
            )
          }
        />
        <span onClick={handleProfile} className="hover:text-violet-700">
          {data.owner}
        </span>
      </div>
    </article>
  );
};

export default Card;
