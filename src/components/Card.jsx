const Card = ({ data }) => {
  return (
    <article className="w-[calc((100%-(40px*4))/5)] mb-18 border-b border-slate-300 self-start pb-3">
      <figure className="w-full mb-2 cursor-pointer">
        <img
          className="w-full"
          src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`}
          alt={data.title}
        />
      </figure>
      <h3 className="mb-6 text-md text-slate-800">{data.title}</h3>

      <div className="flex items-center w-full gap-2 text-xs text-orange-400 cursor-pointer">
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
        <span>{data.owner}</span>
      </div>
    </article>
  );
};

export default Card;
