import PopularVideoWatchPage from "./PopularVideoWatchPage";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constent";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  useEffect(() => {
    getVideos();
  }, [searchQuery]);
  async function getVideos() {
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + "&q=" + searchQuery);
    const json = await data?.json();
    console.log(json);
    setSearchVideos(json.items);
  }
  return (
    <div className="lg:ml-16 sm:ml-6  w-full">
      <div className="w-full">
        {searchVideos?.map((data) => (
          <Link key={data.id.videoId} to={"/watch?v=" + data.id.videoId}>
            {" "}
            <PopularVideoWatchPage info={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchResult;
