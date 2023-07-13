import React, { useState } from "react";
function VideoCard({ info }) {
  const { statistics, snippet, kind } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-full sm:w-52 lg:w-60 xl:w-80  xl:mx-4 sm:mx-2 sm:my-4">
      <img className="rounded-lg shadow-lg" src={thumbnails.medium.url} />
      <span className="font-bold px-2 mt-2 line-clamp-2">{title}</span>
      <div className="flex flex-col p-2">
        <span className="text-gray-400 font-medium">{channelTitle}</span>

        {kind === "youtube#searchResult" ? (
          ""
        ) : (
          <span className="text-gray-400 font-medium">
            {statistics?.viewCount / 1000}K views
          </span>
        )}
      </div>
      <div className="p-2"></div>
    </div>
  );
}
export default VideoCard;
