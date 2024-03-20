import { useQuery } from "@tanstack/react-query";
import { fetchFlickr } from "../api/api";
import Card from "./Card";

//npm 설치시 npm i react-masonry-component  --force or --legacy-peer-deps
//--force는 우회설치
//--legacy-peer-deps는 오류내용 무시 설치 (이걸로 설치했음)

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
