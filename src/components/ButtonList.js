import React from "react";
import Button from "./Button";

function ButtonList() {
  const list = [
    "All",
    "Live",
    "Tamil Cinema",
    "Music",
    "Computer programming",
    "Comedy",
    "Mixes",
    "News",
    "Debates",
    // "Superhero movies",
    // "History",
    // "Bhajan music",
    // "Computer",
    // "Smart phones",
  ];
  return (
    <div className="md:flex hidden">
      <div className="flex flex-wrap">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
}
export default ButtonList;
