import React, { useState } from "react";
import "./WhoToFollw.css";
import { Avatar } from "@mui/material";
import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import { whomfollow } from "../../const";
function WhoToFollw() {
  let [followsData, setFollowsData] = useState(whomfollow);
  function handleFollowButton(fData) {
    // setFollowButtonData(!followButtonAtomData);

    const indexOfClickedFollow = followsData.findIndex(
      (index) => index.followUserName === fData.followUserName
    );
    // console.log(fData.followUserName);
    followsData[indexOfClickedFollow].isFollow =
      !followsData[indexOfClickedFollow].isFollow;
    setFollowsData([...followsData]);
    // console.log(followsData)
  }
  return (
    <div className="whoToFollwContainer">
      <h2>Who to follow</h2>
      {/* <TwitterEmbedded/> */}
      <div className="follow-p">
        {followsData.map((fData, i) => (
          <div key={i} className="following">
            <Avatar src="" />
            <div className="follows">
              <h3>{fData.followName}</h3>
              <p>{fData.followUserName}</p>
              <span>{fData.folloDesignation}</span>
            </div>

            <TwitterButton
              keys={i}
              onClickAction={() => handleFollowButton(fData)}
              btnText={!fData.isFollow ? "Follow" : "Following"}
              variant="outlined"
              btnStyle={!fData.isFollow ? "followButton" : "followingButton"}
            />

            {/* <button onClick={() => handleFollowButton(fData)}>
              {!fData.isFollow ? "follow" : "Following"}
            </button> */}
          </div>
        ))}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}

export default WhoToFollw;
