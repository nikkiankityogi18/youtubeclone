import React from "react";
const PopularVideoWatchPage = ({ info }) => {
  const { statistics, snippet, kind } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex flex-row w-full sm:mx-2 mb-4">
      <div className="flex sm:w-2/5 w-1/2  lg:w-1/2 max-h-52 max-w-sm">
        <img
          className="rounded-lg w-full shadow-lg max-h-52 max-w-sm"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="flex  lg:w-1/2 w-3/5 flex-col">
        <span className="font-bold px-2 mt-2 text-sm sm:text-base line-clamp-2">
          {title}
        </span>
        <div className="flex flex-col p-2">
          <span className="text-gray-400 text-sm sm:text-base font-medium">
            {channelTitle}
          </span>
          <span className="text-gray-400 text-sm sm:text-base font-medium">
            {statistics?.viewCount / 1000}K views
          </span>
        </div>
      </div>
      <div className="p-2"></div>
    </div>
  );
};
export default PopularVideoWatchPage;
