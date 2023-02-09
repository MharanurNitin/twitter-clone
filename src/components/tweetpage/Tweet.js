import React,{useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Post from '../post/Post';
import "./tweet.css";
function Tweet() {
    const {tweetid}=useParams();
    let userList = JSON.parse(localStorage.getItem("userList"));
    const [profile]=useState(userList);
    const [tweet,setTweet]=useState()
    function findUserTweet(){
       let arr = tweetid.split("-");
       let user=profile.find((el)=>(
          el.handlerName===arr[0]
       ))
      
       let specifictweet=user["tweets"].find((el)=>{
        
        return el.tweetid===+arr[1]
       })
       console.log(specifictweet)
     
       setTweet(specifictweet);
    }


    useEffect(()=>{
   findUserTweet(tweetid)
    },[])
  return (
    <>
      <div className="tweet__container">
        <div className="header">
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <h3>Tweets</h3>
        </div>
        {tweet && <Post tweet={tweet} />}
      </div>
    </>
  );
}

export default Tweet