import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAddTweet from '../utils/useAddTweet';
import TweetBox from '../components/tweetBox/TweetBox';
import { Link } from 'react-router-dom';
function ComposeTweet() {
    const [selectedFile, setSelectedFile] = useState("");
     const [tweetMessage, setTweetMessage, handleTweetBtnClick, tweetList] =useAddTweet(selectedFile, setSelectedFile);
    function handleTweetBtn(){

    }
  return (
    <div className="feed">
      <Link to="/">
        <div className="headerContainer">
          <h1>
            <ArrowBackIcon />
          </h1>
        </div>
      </Link>
      <div className="tweetBox">
        <TweetBox
          tweetMessage={tweetMessage}
          setTweetMessage={setTweetMessage}
          placeholderText="What's happening...?"
          setSelectedFile={setSelectedFile}
          handleTweetBtnClick={handleTweetBtnClick}
          selectedFile={selectedFile}
        />
      </div>
    </div>
  );
}

export default ComposeTweet