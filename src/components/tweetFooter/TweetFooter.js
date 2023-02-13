import React from "react";
import TweetFooterIcons from "../../atoms/tweetFooterIcons/TweetFooterIcons";
import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import './TweetFooter.css'

function TweetFooter({ handleTweetBtnClick, setSelectedFile, hidetweetBtn }) {
  return (
    <>
      <div className="tweetFooter">
        <TweetFooterIcons setSelectedFile={setSelectedFile} />
        {hidetweetBtn && (
          <TwitterButton
            onClickAction={handleTweetBtnClick}
            btnText="Tweet"
            variant="outlined"
            btnStyle="tweetBoxButton"
          />
        )}
      </div>
    </>
  );
}

export default TweetFooter;
