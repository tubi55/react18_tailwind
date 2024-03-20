import Card from "./Card";
import { useGlobalData } from "../hooks/useGlobalData";
import { useFlickrQuery } from "../hooks/useFlicktQuery";

const List = () => {
  const { FlickrType } = useGlobalData();
  const { data, isPending, isError, error } = useFlickrQuery(FlickrType);

  return (
    <section className="relative flex flex-wrap justify-start w-full gap-[var(--gap)]">
      {isPending && <p className="infoText">Loading Flickr Data...</p>}
      {isError && <p className="infoText">{error?.message}</p>}
      {!isPending && data?.length === 0 && (
        <p className="infoText">
          Opps.. There's no result!!
          <br />
          Try another keyword!
        </p>
      )}
      {data?.map((flickrData) => (
        <Card key={flickrData.id} data={flickrData} />
      ))}
    </section>
  );
};

export default List;
