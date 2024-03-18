const Card = ({ data }) => {
  return (
    <article>
      <div className="picFrame">
        <img
          src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`}
          alt={data.title}
        />
        <h3>{data.title}</h3>
      </div>
    </article>
  );
};

export default Card;
