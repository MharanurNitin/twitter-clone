import React from "react";
import "./Feed.css";
import Post from "../../components/post/Post";
import TweetBox from "../../components/tweetBox/TweetBox";
import { totalTweets, tweetLists } from "../../recoil-states";
import { useRecoilState } from "recoil";
function Feed() {
  const [tweetPosts] = useRecoilState(tweetLists);
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

      {tweetPosts.map((post) => (
        <Post key={post.name} tweets={post} />
      ))}
    </div>
  );
}

export default Feed;
