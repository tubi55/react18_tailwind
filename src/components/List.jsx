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

  console.log("data:", data, "isPending:", isPending);

  return (
    <section>
      {isPending && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {data?.map((flickrData) => (
        <Card key={flickrData.id} data={flickrData} />
      ))}
    </section>
  );
};

export default List;
