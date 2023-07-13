import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  YOUTUBE_COMMENT_API,
  YOUTUBE_POPULAR_VIDEO_SUGGESTION_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constent";
import VideoPlayerSection from "./VideoPlayerSection";
import PopularVideoWatchPage from "./PopularVideoWatchPage";
import Comment from "./Comment";

const WatchPage = () => {
  const [videoData, setVideoData] = useState();
  const [popularVideos, setPopularVideos] = useState([]);
  const [commentData, setCommentData] = useState();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    getVideosData();
    getPopularVideosData();
    getCommentData();
  }, [videoId]);

  async function getVideosData() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    // console.log(json);

    const vedioDetails = json.items?.filter((e) => e.id == videoId);
    // console.log(vedioDetails);
    setVideoData(vedioDetails[0]);
  }
  async function getPopularVideosData() {
    const data = await fetch(YOUTUBE_POPULAR_VIDEO_SUGGESTION_API);
    const json = await data?.json();
    setPopularVideos(json.items);
  }

  async function getCommentData() {
    const data = await fetch(YOUTUBE_COMMENT_API + "&videoId=" + videoId);
    const json = await data.json();
    setCommentData(json.items);
  }

  return (
    <div className="flex lg:flex-row flex-col md:m-8 sm:mx-2 mx-0 w-full">
      <div className="flex flex-col w-full lg:w-3/5">
        <VideoPlayerSection videoData={videoData} videoId={videoId} />
        <div className="lg:flex hidden">
          <Comment data={commentData} />
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        {popularVideos.map((data) => (
          <Link key={data.id} to={"/watch?v=" + data.id}>
            {" "}
            <PopularVideoWatchPage info={data} />
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <Comment data={commentData} />
      </div>
    </div>
  );
};
export default WatchPage;
