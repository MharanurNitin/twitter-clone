import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../../components/post/Post";
import TweetBox from "../../components/tweetBox/TweetBox";
import { totalTweets, tweetLists } from "../../recoil-states";
import { useRecoilState } from "recoil";
function Feed() {
  // const [tweetPosts] = useRecoilState(tweetLists);
  const [tweetList,setTweetList]=useState('');
  useEffect(()=>{
    let tweets=JSON.parse(localStorage.getItem('tweetList'));
    setTweetList(tweets);
  })
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>

      <TweetBox />

      {tweetList&&tweetList.map((post) => (
        <Post key={post.name} tweets={post} />
      ))}
    </div>
  );
}

export default Feed;
