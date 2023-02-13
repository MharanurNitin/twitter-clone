import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Avatar } from "@mui/material";
import { sideBarIcons } from "../../const";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link, useNavigate } from 'react-router-dom';
export default function TemporaryDrawer({ profile}) {
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate=useNavigate();
  function handleOptionClick(id){
    if(id===1){
      navigate(`/${profile.handlerName}`);
    }
  }
  
const icons = [
  { id: 1, Icon: PermIdentityIcon,text:"Profile" },
  { id: 2, Icon: ListAltIcon ,text:"List"},
  { id: 3, Icon: BookmarkBorderIcon,text:"Bookmark" },
];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="drawer-AccountInfo"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          marginInline: ".8rem",
          marginBottom: "1.5rem",
        }}
      >
        <h2>Account Info</h2>
        <h2 onClick={toggleDrawer(anchor, false)}>X</h2>
      </div>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginInline: "15px",
          marginBottom: ".8rem",
        }}
      >
        <Link to={`/${profile.handlerName}`}><Avatar
          src={profile.profilePic}
          style={{ fontSize: "90px", width: "50px", height: "50px" }}
        /></Link>
        <h2
          style={{
            display: "flex",
            fontSize: "25px",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "0px 10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +
        </h2>
      </div>


      <div style={{ marginLeft: "20px", marginBottom: "15px" }}>
        <h2>{profile.name}</h2>
        <span>{profile.handlerName}</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          marginLeft: "20px",
          marginBottom: "1.5rem",
        }}
      >
        <h3>{profile?.followings} Followings</h3>
        <h3>{profile?.follower}Follower</h3>
      </div>
      {icons.map((el) => (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginLeft: "15px",
            marginBottom: "1rem",
          }}
          onClick={() => handleOptionClick(el.id)}
        >
          <el.Icon
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          />
          <h1>{el.text}</h1>
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Avatar src={profile.profilePic}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}