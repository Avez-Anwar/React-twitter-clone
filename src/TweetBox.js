import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
import Image from "./images/Emoji.jpg";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form className="tweetbox__form">
        <div className="tweetbox__avatar">
          <Avatar src={Image} />
          <input
            type="text"
            placeholder="Whats happening"
            className="tweetbox__input"
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetbox__inputbox"
        />
        <Button className="tweetbox__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
