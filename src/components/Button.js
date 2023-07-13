import React from "react";

function Button({ name }) {
  return (
    <div className="bg-gray-200 py-2 px-4 m-2 rounded-lg">
      <div>{name}</div>
    </div>
  );
}

export default Button;
