import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constent";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    setVideos(json.items);
  }
  return (
    <div className="">
      <div className="flex justify-center flex-wrap sm:mx-6 mx-2 my-4">
        {videos.map((data) => (
          <Link key={data.id} to={"/watch?v=" + data.id}>
            {" "}
            <VideoCard info={data} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default VideoContainer;
