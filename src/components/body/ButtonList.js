import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Dance",
  "HipHop",
  "Bhajan",
  "Movies",
];
const ButtonList = () => {
  return (
    <div>
      <Button list={list} />
    </div>
  );
};

export default ButtonList;
