import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfileSection from "../../components/profileSection/ProfileSection1";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usersList } from "../../recoil-states";
// import Post from "../../components/post/Post";
import ProfilePost from "../../components/profilePost/ProfilePost";

function ProfilePage() {
  const navigate = useNavigate();
  const [profiles, setprofiles] = useRecoilState(usersList);
  // let userList = JSON.parse(localStorage.getItem("userList"));
  // const [profiles, setprofiles] = useState(userList);
  const [Profiledata, setProfileData] = useState("");
  const { handlerName } = useParams();
  // console.log(handlerName);
  function findUserProfile(handlerName) {
    const profileData = profiles.find(
      (profiledata) => profiledata.handlerName === handlerName);
    setProfileData(profileData);
  }
  // useEffect(()=>{
  //   let userList=JSON.parse(localStorage.getItem('userList'));
  //   setprofiles(userList);
  // },[])
  useEffect(() => {
    findUserProfile(handlerName);
  }, [profiles]);
  return (
    <>
      {/* {console.log(Profiledata)} */}
      <div className="feed">
        <div className="profilePage">
          <div className="profileHeader">
            <div>
              <h2>
                <span>
                  <ArrowBackIcon
                    className="arrowIcon"
                    onClick={() => navigate(-1)}
                  />
                </span>
                <span>{Profiledata?.name}</span>
              </h2>
              <p>{Profiledata?.tweets?.length} Tweets</p>
            </div>
            <ProfileSection Profiledata={Profiledata} />
            {Profiledata &&
              Profiledata["tweets"]?.map((el, ind, arr) => (
                <ProfilePost post={el} profiledata={Profiledata} />
              ))}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default ProfilePage;
