import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import Image from "./images/Emoji.jpg";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Avez Anwar",
      username: "avezanwar6@gmail",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form className="tweetbox__form">
        <div className="tweetbox__avatar">
          <Avatar src={Image} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="Whats happening"
            className="tweetbox__input"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetbox__inputbox"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
