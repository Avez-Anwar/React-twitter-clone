import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Screen from "./images/screen.png";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon />
        <input type="text" placeholder="Search twitter" />
      </div>
      <img src={Screen} alt="" />
    </div>
  );
}

export default Widgets;
