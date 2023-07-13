import React from "react";
import { sideBarContent } from "../utils/constent";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";
function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div>
      <div className="sm:block hidden">
        {sideBarContent.map((e, index) => (
          <div key={index}>
            {e.map((data) => (
              <div className="flex" key={data.title}>
                <div className="w-10  ml-7 mx-3 my-2">
                  <img className="flex items-start h-8" src={data.image} />
                </div>
                <Link
                  className="flex font-medium items-center cursor-pointer"
                  to={data.url}
                >
                  <span>{data.title}</span>
                </Link>
              </div>
            ))}
            <hr className="border ml-2" />
          </div>
        ))}
      </div>
      <div className="sm:hidden block ">
        {sideBarContent.map((e, index) => (
          <div key={index}>
            {e.map((data) => (
              <div className="flex" key={data.title}>
                <div className="w-10  ml-7 mx-3 my-2">
                  <img className="flex items-start h-8" src={data.image} />
                </div>
              </div>
            ))}
            <hr className="border ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SideBar;
