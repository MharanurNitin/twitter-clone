import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
function TweetBox({
  tweetMessage,
  setTweetMessage,
  handleTweetBtnClick,
  placeholderText,
  setSelectedFile,
  selectedFile,
  hidetweetBtn,
}) {
  return (
    <div className="tweetBox">
      <form onSubmit={handleTweetBtnClick}>
        <WhatsHappeningTweets
          placeholderText={placeholderText}
          btnStyle="WhatsHappeningTweets"
          values={tweetMessage}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          handleChange={(e) => setTweetMessage(e.target.value)}
        />
        <TweetFooter
          handleTweetBtnClick={handleTweetBtnClick}
          setSelectedFile={setSelectedFile}
          hidetweetBtn
        />
      </form>
    </div>
  );
}

export default TweetBox;
