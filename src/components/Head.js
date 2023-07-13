import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constent";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const searchChace = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChace[searchQuery]) {
        setSuggestions(searchChace[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data?.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  const handleInputBlur = () => {
    // Delay hiding the suggestions to allow clicking on them
    setTimeout(() => {
      setShowSuggestions(false);
      console.log("w");
    }, 200);
  };
  const handleSearch = () => {
    // Change the URL with the search query
    navigate(`/results?search_query=" + ${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handleSearch();
      setShowSuggestions(false);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center shadow-md md:p-6 p-2 w-full fixed top-0 bg-white z-10">
      <div>
        <div className="flex">
          <img
            onClick={() => toggleMenuHandler()}
            className="lg:h-10 md:h-8 h-6 cursor-pointer"
            alt="burger-menu-img"
            src="img/burger.png"
          />
          <a href="/">
            <img
              className="lg:h-10 md:h-8 h-6 "
              alt="you-tube-logo"
              src="img/logo-youtube.png"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <input
              className="lg:w-96 md:w-72 sm:w-52 w-44 border rounded-l-full md:py-2 shadow-inner px-4 border-gray-200"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleInputBlur}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <button
              onClick={handleSearch}
              className="bg-gray-200  md:py-2 py-1 px-4 rounded-r-full border border-gray-200"
            >
              <img
                className="md:h-6 h-4"
                src="img/search-icon.png"
                alt="search-icon"
              />
            </button>
          </div>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white lg:w-96 w-72 rounded-xl shadow-black shadow-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <Link key={index} to={"/results?search_query=" + suggestion}>
                  <li className="flex py-1 cursor-pointer ">
                    <img
                      className="h-6 p-1 m-2"
                      src="img/search-icon.png"
                      alt="search-icon"
                    />
                    <span className="m-2">{suggestion}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between">
          <img
            className="h-8 mx-2 md:flex hidden"
            src="img/upload-video.png"
            alt="user-icon"
          />
          <img
            className="h-10 mx-2 md:flex hidden"
            src="img/notification-bell.png"
            alt="user-icon"
          />
          <img
            className="lg:h-8 h-6  mx-1"
            src="img/user-icon.png"
            alt="user-icon"
          />
        </div>
      </div>
    </div>
  );
}
export default Head;
