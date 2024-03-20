import { useQuery } from "@tanstack/react-query";

const fetchFlickr = async ({ queryKey: [_, opt] }) => {
  const num = 40;
  const flickr_api_key = process.env.REACT_APP_FLICKR_API;
  const baseURL = `https://www.flickr.com/services/rest/?&api_key=${flickr_api_key}&per_page=${num}&format=json&nojsoncallback=1&method=`;
  const method_interest = "flickr.interestingness.getList";
  const method_user = "flickr.people.getPhotos";
  const method_search = "flickr.photos.search";
  const url_interest = `${baseURL}${method_interest}`;
  const url_user = `${baseURL}${method_user}&user_id=${opt.id}`;
  const url_search = `${baseURL}${method_search}&tags=${opt.keyword}`; //search url 추가

  let url = "";
  opt.type === "user" && (url = url_user);
  opt.type === "interest" && (url = url_interest);
  opt.type === "search" && (url = url_search);

  const response = await fetch(url);
  if (!response.ok) throw new Error("Fail to fetch Flickr data");

  const flickrData = await response.json();
  return flickrData.photos.photo;
};

export const useFlickrQuery = (opt) => {
  return useQuery({
    queryKey: ["flickr", opt],
    queryFn: fetchFlickr,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
};
