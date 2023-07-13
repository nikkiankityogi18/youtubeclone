import React from "react";
const VideoPlayerSection = ({ videoId, videoData }) => {
  const hoursAgo = Math.round(
    (new Date() - new Date(videoData?.snippet.publishedAt)) / (1000 * 60 * 60)
  );
  return (
    <div className="w-full">
      <div className="relative pb-[56.25%]">
        <iframe
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      <div className="mx-1">
        <h1 className="font-semibold lg:text-xl sm:text-base text-sm mt-2">
          {videoData?.snippet?.title}
        </h1>
        <div className="flex lg:flex-row flex-col  lg:items-center justify-between my-2">
          <div className="flex items-center sm:my-4">
            <img className="h-8 my-4" src="img/user-icon.png" alt="user-icon" />
            <span className="mx-4 sm:text-base text-sm font-bold">
              {videoData?.snippet?.channelTitle}
            </span>
            <button className="px-5 py-1 sm:text-base text-sm bg-white border border-gray-300 hover:bg-gray-300 font-semibold  rounded-2xl">
              Join
            </button>
            <button className="mx-4 px-5 py-1 sm:text-base text-sm hover:bg-white border  border-gray-300 bg-gray-300 font-semibold  rounded-2xl">
              Subscribe
            </button>
          </div>
          <div className="flex  items-center sm:justify-start  justify-center">
            <button className="flex items-center sm:text-base text-sm border border-r-gray-400 bg-gray-300 font-semibold  rounded-l-2xl">
              <img
                className="h-8 px-2 py-1"
                src="img/like.png"
                alt="like-icon"
              />
              <span className="mx-2">{videoData?.statistics?.likeCount}</span>
            </button>
            <button className="sm:text-base text-sm border border-l-gray-400 bg-gray-300 font-semibold  rounded-r-2xl">
              <img
                className="h-8 px-2 py-1"
                src="img/dislike.png"
                alt="dislike-icon"
              />
            </button>
            <button className="flex items-center sm:text-base text-sm hover:bg-white border  px-2 mx-2 border-gray-300 bg-gray-300 font-semibold  rounded-2xl">
              <img
                className="h-8 px-1 py-1"
                src="img/share.png"
                alt="share-icon"
              />
              <span className="px-2">Share</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 sm:p-4 p-2 sm:mx-0 mx-2 my-4 rounded-2xl ">
        <div className="bg-gray-200 line-clamp-4 mt-2">
          <div>
            <span className="font-bold mx-2">
              {videoData?.statistics?.likeCount / 1000}K views
            </span>
            <span className="font-bold mx-2">{hoursAgo} hours ago</span>
            {videoData?.snippet?.tags?.map((tag, index) => (
              <span key={index} className="font-semibold text-gray-500 mx-1">
                #{tag}{" "}
              </span>
            ))}
          </div>
          <div>
            <span>{videoData?.snippet?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayerSection;
