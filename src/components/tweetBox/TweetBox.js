import React, { useState } from "react";
import "./TweetBox.css";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
import ShowTweet from "../../atoms/showTweet/ShowTweet";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectFile,
  totalTweets,
  loggedUserData,
  tweetLists,
} from "../../recoil-states";
import { nanoid } from "nanoid";
function TweetBox() {
  const [users, setUsers] = useRecoilState(totalTweets);
  const [tweetList, setTweetList] = useRecoilState(tweetLists);
  const profile = useRecoilValue(loggedUserData);
  const setProfile=useSetRecoilState(loggedUserData);
  // console.log(profile);
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [tweetMessage, setTweetMessage] = useState("");
  let { profilePic, name, verified, handlerName, index, tweets } = profile;
  const sendTweet = (e) => {
    e.preventDefault();
    let obj = {};
    const fortweetList = {
      profilePic,
      name,
      verified,
      handlerName,
      tweetid: tweets.length + 1,
      tweetText: tweetMessage,
      tweetPic: selectedFile,
      retweetCount: 0,
      likeCount: 0,
      viewCount: 0,
      tweetReplies: [],
    };
    const foruserList = {
      tweetid: tweets.length + 1,
      tweetText: tweetMessage,
      tweetPic: selectFile,
      tweetCount: 0,
      retweetCount: 0,
      likesCount: 0,
      viewsCount: 0,
      TweetReplies: [],
    };
    
    let data=[foruserList,...tweets]
    setTweetList([fortweetList, ...tweetList]);
    let modifiedUser=users.map((el,ind,arr)=>(ind===index?{...el,tweets:data}:el))
   setUsers(modifiedUser);
   setProfile({...profile,tweets:data});
    setSelectedFile(null);
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <WhatsHappeningTweets
          btnStyle="WhatsHappeningTweets"
          values={tweetMessage}
          handleChange={(e) => setTweetMessage(e.target.value)}
          // tweetImage={tweetImage}
          // handleTweetImage={(e) => setTweetImage(e.target.value)}
        />
        <TweetFooter handleClick={sendTweet} />
        <ShowTweet />
      </form>
    </div>
  );
}

export default TweetBox;
