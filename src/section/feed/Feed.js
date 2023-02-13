import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../../components/post/Post";
import TweetBox from "../../components/tweetBox/TweetBox";
import { nanoid } from "nanoid";
import useAddTweet from "../../utils/useAddTweet";
import { Avatar } from "@mui/material";
import TwitterIconn from "../../atoms/twitterIconn/TwitterIconn";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Drawer from "./Drawer"
import { useNavigate } from "react-router-dom";


function Feed() {
    const icons = [{id:1,Icons:HomeIcon}, {id:2,Icons:SearchIcon}, {id:3,Icons:NotificationsNoneIcon}, {id:4,Icons:MailOutlineIcon}];
  const navigate=useNavigate();
  const [profile, setProfile] = useState("");
  const [selectedFile,setSelectedFile]=useState("");
  const [tweetMessage, setTweetMessage, handleTweetBtnClick, tweetList] = useAddTweet(selectedFile, setSelectedFile);
  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setProfile(loggedInUser);
  }, [tweetMessage]);

function handleclick(){
  navigate("/compose/tweet");
}
function handleClickdownIcon(id){
 if(id===1) navigate("/");
}
  return (
    <div className="feed">
      <div className="feed__header">
        <div className="top-feed-header">
          <h2 className="hometext">Home</h2>
          <div className="iconsfeed">
            <Drawer profile={profile} className="drawer" />
            <TwitterIconn className="twitterIconfeed" />
          </div>
        </div>
        <div>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>
      <button
        className="tweetBtn"
        onClick={handleclick}
        style={{ background: "lightblue", color: "white" }}
      >
        +
      </button>
      <div className="downIcon">
        {icons.map((el) => (
          <el.Icons key={el.id} onClick={() => handleClickdownIcon(el.id)} />
        ))}
      </div>
      <div className="tweetBoxfeed">
        <TweetBox
          tweetMessage={tweetMessage}
          setTweetMessage={setTweetMessage}
          placeholderText="What's happening...?"
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          handleTweetBtnClick={handleTweetBtnClick}
          hidetweetBtn={true}
        />
      </div>
      <div className="feed">
        {tweetList &&
          tweetList.map((tweet) => (
            <Post key={nanoid()} tweet={tweet} profile={profile} />
          ))}
      </div>
    </div>
  );
}

export default Feed;
