import { Avatar } from "@material-ui/core";
import React from "react";
import Image from "./images/Emoji.jpg";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";
import Tips from "./images/tips.jpg";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={Image} />
        <div className="post__testname">
          <div className="post__verify">
            <h3>Test name</h3>
          </div>

          <VerifiedUserIcon className="post__verified" />

          <small>@testtwitter</small>
        </div>
      </div>
      <p>I challange you to build a twitter clone with react</p>
      <img className="post__image" src={Tips} alt="" />

      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
    </div>
  );
}

export default Post;
