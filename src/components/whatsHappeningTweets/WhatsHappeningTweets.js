import React, { useEffect, useState } from "react";
import profileImge from "../../images/Amr.jpg";
import "./WhatsHappeningTweets.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUserData, selectFile } from "../../recoil-states";
import CloseIcon from "@mui/icons-material/Close";
 
function WhatsHappeningTweets({
  values,
  handleChange,
  placeholderText,
  selectedFile,
  setSelectedFile,
}) {
  // const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    let profile = JSON.parse(localStorage.getItem("loggedInUser"));
    setProfile(profile);
  }, []);
  return (
    <>
      <div className="WhatsHappeningTweets">
        <Link to={`/${profile?.handlerName}`}>
          <Avatar src={profile?.profilePic} className="avatar" />
        </Link>
        <input
          onChange={handleChange}
          value={values}
          placeholder={placeholderText}
          type="text"
        />
      </div>
      {selectedFile && (
        <div className="selectImage">
          <div onClick={() => setSelectedFile(null)}>
            <div className="cancelSelectImg">
              <CloseIcon />
            </div>
          </div>
          <img src={selectedFile} alt="selected File" />
        </div>
      )}
    </>
  );
}

export default WhatsHappeningTweets;
