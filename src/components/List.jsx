import { useQuery } from "@tanstack/react-query";
import { fetchFlickr } from "../api/api";

const List = () => {
  const { data, isPending } = useQuery({
    queryKey: ["flickr"],
    queryFn: fetchFlickr,
  });
  console.log("data:", data, "isPending:", isPending);
  return <section></section>;
};

export default List;
