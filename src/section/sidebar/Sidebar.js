import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { sideBarIcons } from "../../const";
import TwitterIconn from "../../atoms/twitterIconn/TwitterIconn";
import SidebarOption from "../../atoms/sidebarOption/SidebarOption";
// import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import ProfileButton from "../../atoms/profileButton/ProfileButton";
import DialogBox from "../../components/dialogbox/DialogBox";
import { Link } from "react-router-dom";
import { loggedUserData } from "../../recoil-states";
import { useRecoilValue } from "recoil";
function Sidebar() {
  // const profile = useRecoilValue(loggedUserData);
  const [profile,setProfile]=useState("");
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("loggedInUser"));
    setProfile(data);
  },[])

  return (
    <div className="sidebar">
      {/* <TwitterIcon /> */}
      <Link to="/">
        <TwitterIconn />
      </Link>
      {sideBarIcons.map((icon, i) => (
        <div key={i}>
          <SidebarOption
            keys={i}
            active={icon.active}
            Icon={icon.Icons}
            text={icon.text}
          />
        </div>
      ))}
      <DialogBox />
      <ProfileButton />
    </div>
  );
}

export default React.memo(Sidebar);
