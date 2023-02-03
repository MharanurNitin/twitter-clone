import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedUserData } from "../../recoil-states";
import "./SidebarOption.css";
function SidebarOption({ keys, active, text, Icon }) {
   const profile = useRecoilValue(loggedUserData);
  if (keys === 0) {
    return (
      <Link to="/">
        <div
          key={keys}
          className={`sidebarOption ${active && "sidebarOption--active"}`}
        >
          <Icon />
          <h2>{text}</h2>
        </div>
      </Link>
    );
  } else if (keys === 6) {
    if (keys === 6) {
      return (
        <Link to={`/${profile?.handlerName}`}>
          <div
            key={keys}
            className={`sidebarOption ${active && "sidebarOption--active"}`}
          >
            <Icon />
            <h2>{text}</h2>
          </div>
        </Link>
      );
    }
  } else {
    return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default memo(SidebarOption);
