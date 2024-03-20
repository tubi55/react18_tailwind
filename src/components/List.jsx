import Card from "./Card";
import { useGlobalData } from "../hooks/useGlobalData";
import { useFlickrQuery } from "../hooks/useFlicktQuery";
import { useState } from "react";
import Modal from "./Modal";

const List = () => {
  const [ImgURL, setImgURL] = useState('');
  
  const { FlickrType } = useGlobalData();
  const { data, isPending, isError, error } = useFlickrQuery(FlickrType);

  return (
    <>
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
          <Card key={flickrData.id} data={flickrData} setImgURL={setImgURL} />
        ))}
      </section>

      <Modal>
      {!isPending && data.length !== 0 && <img className='object-contain w-full h-full' src={ImgURL} alt={ImgURL} />}
      </Modal>
    </>
  );
};

export default List;
