import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
function TweetBox({ tweetMessage, setTweetMessage, handleTweetBtnClick,placeholderText }) {
  
  return (
    <div className="tweetBox">
      <form onSubmit={handleTweetBtnClick}>
        <WhatsHappeningTweets
         placeholderText={placeholderText}
          btnStyle="WhatsHappeningTweets"
          values={tweetMessage}
          handleChange={(e) => setTweetMessage(e.target.value)}
        />
        <TweetFooter handleTweetBtnClick={handleTweetBtnClick} />
      </form>
    </div>
  );
}

export default TweetBox;
