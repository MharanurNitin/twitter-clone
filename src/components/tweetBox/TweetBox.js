import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
import ShowTweet from "../../atoms/showTweet/ShowTweet";
import { useRecoilState } from "recoil";
import { selectFile } from "../../recoil-states";
import { nanoid } from "nanoid";
function TweetBox() {
  // const [users, setUsers] = useRecoilState(totalTweets);
  // const [tweetList, setTweetList] = useRecoilState(tweetLists);
  // const profile = useRecoilValue(loggedUserData);
  // const setProfile=useSetRecoilState(loggedUserData);
  // console.log(profile);
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [tweetMessage, setTweetMessage] = useState("");
  const [profile, setProfile] = useState("");
  const [userList, setUserList] = useState();
  const [tweetList, setTweetList] = useState();
  useEffect(() => {
    let profile = JSON.parse(localStorage.getItem("loggedInUser"));
    let usersList = JSON.parse(localStorage.getItem("userList"));
    let tweetsList = JSON.parse(localStorage.getItem("tweetList"));
    setProfile(profile);
    setUserList(usersList);
    setTweetList(tweetsList);
  }, [profile,userList,tweetList]);
  let { profilePic, name, verified, handlerName, index, tweets } = profile;
  const sendTweet = () => {

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
      tweetPic: selectedFile,
      tweetCount: 0,
      retweetCount: 0,
      likesCount: 0,
      viewsCount: 0,
      TweetReplies: [],
    };

   
    localStorage.setItem(
      "tweetList",
      JSON.stringify([fortweetList, ...tweetList])
    );
    setTweetList([fortweetList, ...tweetList]);
     let data = [fortweetList, ...tweets];
    //  console.log("data",data);
    // console.log(userList);
    console.log("index:",index);
    let modifiedUser = userList?.map((el, ind) =>(
      ind === profile.index ? { ...el, tweets: data } : el)
    );
    // console.log("modified users",modifiedUser);
    localStorage.setItem("userList", JSON.stringify(modifiedUser));
    setUserList(modifiedUser);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...profile, tweets: data })
    );
    setProfile({ ...profile, tweets: data });
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
