export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_POPULAR_VIDEO_SUGGESTION_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const sideBarContent = [
  [
    {
      title: "Home",
      image: "/img/home.png",
      url: "/",
    },
    {
      title: "Shorts",
      image: "/img/shorts.png",
      url: "/",
    },
    {
      title: "Subscription",
      image: "/img/subscription.png",
      url: "/",
    },
  ],
  [
    {
      title: "Library",
      image: "/img/library.png",
    },
    {
      title: "History",
      image: "/img/history.png",
    },
    {
      title: "Your videos",
      image: "/img/your-video.png",
    },
    {
      title: "Watch later",
      image: "/img/watch-later.png",
    },
    {
      title: "Liked videos",
      image: "/img/liked-video.png",
    },
  ],
  [
    {
      title: "Trending",
      image: "/img/trending.png",
    },
    {
      title: "Shopping",
      image: "/img/shopping.png",
    },
    {
      title: "Music",
      image: "/img/music.png",
    },
    {
      title: "Films",
      image: "/img/films.png",
    },
    {
      title: "Live",
      image: "/img/live.png",
    },
    {
      title: "Gaming",
      image: "/img/gaming.png",
    },
    {
      title: "News",
      image: "/img/news.png",
    },
    {
      title: "Sports",
      image: "/img/sports.png",
    },
    {
      title: "Learning",
      image: "/img/learning.png",
    },
  ],
];
export const YOUTUBE_SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;
