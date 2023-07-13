import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Details from "./Details";

function Body() {
  return (
    <div className="flex relative md:top-24 top-12">
      <Details />
      <Head />
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Body;
