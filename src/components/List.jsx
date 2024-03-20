import { useQuery } from "@tanstack/react-query";
import { fetchFlickr } from "../api/api";
import Card from "./Card";

const List = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["flickr"],
    queryFn: fetchFlickr,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });

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
