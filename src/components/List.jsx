import Card from "./Card";
import { useGlobalData } from "../hooks/useGlobalData";
import { useFlickrQuery } from "../hooks/useFlicktQuery";

const List = () => {
  const { FlickrType } = useGlobalData();
  const { data, isPending, isError, error } = useFlickrQuery(FlickrType);

  return (
    <section className="flex flex-wrap justify-start w-full gap-5">
      {isPending && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {data?.map((flickrData) => (
        <Card key={flickrData.id} data={flickrData} />
      ))}
    </section>
  );
};

export default List;
