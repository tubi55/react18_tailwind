const Card = ({ data }) => {
  return (
    <article className="w-[calc((100%-(40px*4))/5)] mb-15 border-b border-slate-400">
      <figure className="w-full mb-4">
        <img
          className="w-full"
          src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`}
          alt={data.title}
        />
      </figure>
      <h3>{data.title}</h3>
    </article>
  );
};

export default Card;
