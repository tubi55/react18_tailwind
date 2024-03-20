import Card from "./Card";
import { useGlobalData } from "../hooks/useGlobalData";
import { useFlickrQuery } from "../hooks/useFlicktQuery";

const List = () => {
  const { FlickrType } = useGlobalData();
  const { data, isPending, isError, error } = useFlickrQuery(FlickrType);
  console.log(isPending);

  return (
    <section className="flex flex-wrap justify-start w-full gap-5">
      {isPending && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {!isPending && data.length === 0 && (
        <p>해당 키워드에 대한 검색 결과가 없습니다.</p>
      )}
      {data?.map((flickrData) => (
        <Card key={flickrData.id} data={flickrData} />
      ))}
    </section>
  );
};

export default List;
