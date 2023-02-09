import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../../components/post/Post";
import TweetBox from "../../components/tweetBox/TweetBox";
import { nanoid } from "nanoid";
import useAddTweet from "../../utils/useAddTweet";
function Feed() {
  const [profile,setProfile]=useState('')
  const [tweetMessage, setTweetMessage, handleTweetBtnClick, tweetList] =useAddTweet();
  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setProfile(loggedInUser);
  }, [tweetMessage]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>

      <TweetBox
        tweetMessage={tweetMessage}
        setTweetMessage={setTweetMessage}
        handleTweetBtnClick={handleTweetBtnClick}
        placeholderText="What's happening...?"
      />

      {tweetList &&
        tweetList.map((tweet) => (
          <Post key={nanoid()} tweet={tweet} profile={profile} />
        ))}
    </div>
  );
}

export default Feed;
