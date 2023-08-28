import React from "react";

const Button = ({ list }) => {
  return (
    <div className="flex">
      {list.map((name) => {
        return (
          <div key={name} className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Button;
