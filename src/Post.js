import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
          <div className="post__testname">
            <div className="post__verify">
              <h3>{displayName}</h3>
            </div>

            <VerifiedUserIcon className="post__verified" />

            <small>{username}</small>
          </div>
        </div>
        <p>{text}</p>
        <img className="post__image" src={image} alt="" />

        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    );
  }
);

export default Post;
