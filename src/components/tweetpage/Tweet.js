import React,{useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Post from '../post/Post';
import "./tweet.css";
import TweetFooter from '../tweetFooter/TweetFooter';
import TweetFooterIcons from '../../atoms/tweetFooterIcons/TweetFooterIcons';
import TweetBox from '../tweetBox/TweetBox';
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
    <><div className="feed">
      <div className="tweet__container">
        <div className="header">
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <h3>Tweets</h3>
        </div>
        {tweet && <Post tweet={tweet} />}
        <h3>Replies</h3>
        {tweet?.tweetReplies &&
          tweet?.tweetReplies?.map((replies) => <Post tweet={replies} />)}
      </div>
      </div>
    </>
  );
}

export default Tweet