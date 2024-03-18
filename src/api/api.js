const fetchFlickr = async () => {
  const num = 50;
  const flickr_api_key = process.env.REACT_APP_FLICKR_API;
  const baseURL = `https://www.flickr.com/services/rest/?&api_key=${flickr_api_key}&per_page=${num}&format=json&nojsoncallback=1&method=`;
  const method_interest = "flickr.interestingness.getList";
  const url = `${baseURL}${method_interest}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Fail to fetch Flickr data");

  const flickrData = await response.json();
  return flickrData.photos.photo;
};

export { fetchFlickr };
