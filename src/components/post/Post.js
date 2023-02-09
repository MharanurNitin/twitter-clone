import React, { useState } from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import ReplyTweetBox from "../ReplyTweetBox/ReplyTweetBox";
import { useRecoilState } from "recoil";
import { clickedcomment } from "../../recoil-states";

import { Link } from "react-router-dom";
function Post({ tweet }) {
  const {
    profilePic,
    name,
    verified,
    handlerName,
    tweetid,
    tweetText,
    tweetPic,
    retweetCount,
    likeCount,
    viewCount,
    tweetReplies,
  } = tweet;
 
  let [comment, setComment] = useState(tweetReplies?.length);
   const [clickedComment, setClickedComment] = useRecoilState(clickedcomment);
  let [retweet, setRetweet] = useState(retweetCount);
  let [like, setLike] = useState(likeCount);
  let [share, setShare] = useState(4);
  let [True, setTrue] = useState(false);
  const [commentBoxOpen, setCommentBoxOpen] = useState(false);
  const comments = () => {
    setClickedComment(tweet);
   setCommentBoxOpen(!commentBoxOpen);
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
    <div className="post">
      <Link to={`/${handlerName}`}>
        <div className="postAvatar">
          <Avatar src={profilePic} />
        </div>
      </Link>

      {/*  */}
      <div className="postBody">
        <Link to={`/tweet/${handlerName}-${tweetid}`}>
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {name}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUserIcon className="postBadge" />}
                  {handlerName}
                </span>
              </h3>
            </div>
            <div className="postHeaderDescription">
              <p>{tweetText}</p>
            </div>
          </div>
          {tweetPic && <img className="img" src={tweetPic} alt="" />}
        </Link>
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
      {commentBoxOpen && (
        <ReplyTweetBox isVisible={true} setCommentBoxOpen={setCommentBoxOpen} />
      )}
    </div>
  );
}

export default Post;
