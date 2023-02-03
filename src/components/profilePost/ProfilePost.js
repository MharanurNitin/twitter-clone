import React, { useState } from "react";
import "./ProfilePost.css";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { profileDataAtom } from "../../recoil-states";
import { Link } from "react-router-dom";
function ProfilePost({ post, profiledata }) {
  const { profilePic, name, verified, handlerName, joinedDate } = profiledata;
  console.log(post.tweetPic);
  let [comment, setComment] = useState(0);
  let [retweet, setRetweet] = useState(0);
  let [like, setLike] = useState(0);
  let [share, setShare] = useState(0);
  let [True, setTrue] = useState(false);

  const comments = () => {
    setComment(comment + 1);
  };
  const retweets = () => {
    setRetweet(retweet + 1);
  };
  const likes = () => {
    !True ? setLike(like + 1) : setLike(like - 1);
    setTrue(!True);
  };
  const shares = () => {
    setShare(share + 1);
  };
  return (
    <>
      <div className="post">
        <div className="postAvatar">
          <Avatar src={profilePic} />
        </div>

        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {name}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUserIcon className="postBadge" />}
                  {handlerName} - {joinedDate}
                </span>
              </h3>
            </div>
            <div className="postHeaderDescription">
              <p>{post?.tweetText}</p>
            </div>
          </div>
          {post.tweetPic && <img className="img" src={post?.tweetPic} alt="" />}
          <div className="postFooter">
            <div className="comment">
              <ChatBubbleOutlineIcon
                onClick={comments}
                fontSize="small"
                className="chatBubble"
                style={{ padding: ".5rem" }}
              />
              <span className="postIcon" value={comment}>
                {comment}K
              </span>
            </div>
            <div className="retweet">
              <RepeatIcon
                onClick={retweets}
                fontSize="small"
                className="repeatIcon"
                style={{ padding: ".5rem" }}
              />
              <span className="postIcon" value={retweet}>
                {retweet}K
              </span>
            </div>
            {!True ? (
              <div className="like">
                <FavoriteBorderIcon
                  onClick={likes}
                  fontSize="small"
                  className="FavouriteIcon"
                  style={{ padding: ".5rem" }}
                />
                <span className="postIcon" value={like}>
                  {like}K
                </span>
              </div>
            ) : (
              <div className="like">
                <FavoriteIcon
                  onClick={likes}
                  fontSize="small"
                  className="FavouriteIconClick"
                  style={{ padding: ".5rem" }}
                />
                <span className="postIcon" value={like}>
                  {like}K
                </span>
              </div>
            )}
            <div className="share">
              <PublishIcon
                onClick={shares}
                fontSize="small"
                className="publishIcon"
                style={{ padding: ".5rem" }}
              />
              <span className="postIcon" value={share}>
                {share}K
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePost;
