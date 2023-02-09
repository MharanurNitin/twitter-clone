import React, { useEffect, useState } from "react";
import { Avatar, Popover } from "@mui/material";
import "./ProfileButton.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profileImge from "../../images/Amr.jpg";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoggedInAtom, loggedUserData } from "../../recoil-states";

function ProfileButton() {
  const [anchor, setAnchor] = useState(null);
  const nevigate = useNavigate();
  // const setUserLoggedInStatus = useSetRecoilState(isUserLoggedInAtom);
  //  const [profile,setProfile] = useRecoilState(loggedUserData);
  let data = JSON.parse(localStorage.getItem("loggedInUser"));
     const [profile, setProfile] = useState(data);
      useEffect(() => {
        let data = JSON.parse(localStorage.getItem("loggedInUser"));
        setProfile(data);
      }, []);
  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleLogout = () => {
    setProfile(null);
    console.log('logged out');
    localStorage.setItem("loggedInUser",null); 
  };
  useEffect(()=>{
    if(!profile){
      console.log("useEffect run");
      nevigate("/signin");
    }
  },[profile])
  const handleExistingUser = () => {
    setAnchor(null);
  };
  return (
    <div className="profile-pop">
    <div className="profile" onClick={popoverProfileButton}>
      <div className="profile-btn">
        <div className="avatar-p">
          <Avatar src={profile?.profilePic} />
        </div>
        <div className="profile-tag">
          <h4>
            {profile?.name}
            <p className="post__headerSpecial">{profile?.handlerName}</p>
          </h4>
          <span>
            <MoreHorizIcon />
          </span>
        </div>
      </div>
    </div>
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => setAnchor(null)}
      PaperProps={{
        style: {
          marginTop: "-4em",
          marginLeft: "-3rem",
          borderRadius: "1rem",
        },
      }}
    >
      <div className="popoverContent">
        <div onClick={handleExistingUser}>Add an existing account</div>
        <div onClick={handleLogout}>Log out{profile?.handlerName}</div>
      </div>
    </Popover>
  </div>
  
  )
}

export default ProfileButton;
