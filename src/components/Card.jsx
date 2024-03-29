import { useGlobalData } from "../hooks/useGlobalData";

const Card = ({ data, setImgURL }) => {
  const { setFlickrType, setModal } = useGlobalData();

  const handleProfile = (e) => {
    setFlickrType({ type: "user", id: e.target.innerText, isProfile: true });
  };

  return (
    <article className="w-[var(--wid)] mb-16 transition duration-300 saturate-50 opacity-80 hover:saturate-150 hover:opacity-100 hover:-translate-y-2">
      {/* thumbnail box */}
      <figure className="picFrame h-[16vmax] mb-2 tb:h-[30vmin]" onClick={()=>setModal(true)}>
        <img
          src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_w.jpg`}
          alt={data.title}
          onClick={()=>setImgURL(`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`)}
        />
      </figure>

      {/* image title */}
      <h3 className="mb-6 min-h-14 text-md text-slate-800 mb:mb-0">
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
