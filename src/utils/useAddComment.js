import {useState,useEffect} from 'react'
import { useRecoilState } from "recoil";
import { selectFile, clickedcomment } from "../recoil-states";
function useAddComment() {
 const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
const [comment, setComment] = useRecoilState(clickedcomment); 
const [tweetMessage, setTweetMessage] = useState("");
 const [profile, setProfile] = useState("");
const [userList, setUserList] = useState();
const [tweetList, setTweetList] = useState();


useEffect(() => {
  let profile = JSON.parse(localStorage.getItem("loggedInUser"));
  let usersList = JSON.parse(localStorage.getItem("userList"));
  let tweetsList = JSON.parse(localStorage.getItem("tweetList"));
  setProfile(profile);
  setUserList(usersList);
  setTweetList(tweetsList);
}, []);

 
 const handleTweetBtnClick = () => {
   //  e.preventDefault();
   let { profilePic, name, verified, handlerName, index, tweets } = profile;
   let { tweetReplies, tweetid, userIndex } = comment;
//    console.log(userIndex);
   const fortweetList = {
     profilePic,
     name,
     verified,
     handlerName,
     tweetid: tweets.length + 1,
     tweetText: tweetMessage,
     tweetPic: selectedFile,
     retweetCount: 0,
     likeCount: 0,
     viewCount: 0,
     tweetReplies: [],
   };
//    localStorage.setItem(
//      "tweetList",
//      JSON.stringify([fortweetList,...tweetList ])
//    );
    // userList["userIndex"]["tweets"]["tweetid"]["tweetReplies"].push(fortweetList);
    let getRepliData=userList[userIndex]["tweets"][tweetid-1]["tweetReplies"].push(fortweetList);

   localStorage.setItem("userList", JSON.stringify(userList));
  // console.log(userList[userIndex]["tweets"][tweetid-1]["tweetReplies"].push(fortweetList));
//    localStorage.setItem(
//      "loggedInUser",
//      JSON.stringify({ ...profile, tweets: data })
//    );
//    setProfile({ ...profile, tweets: data });
   setSelectedFile(null);
   setTweetMessage("");
 };
 return [tweetMessage, setTweetMessage, handleTweetBtnClick];
}

export default useAddComment