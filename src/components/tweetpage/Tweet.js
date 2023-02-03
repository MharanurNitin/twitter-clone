import React from 'react'
import {useParams} from "react-router-dom";
function Tweet() {
    const {tweetid}=useParams();
    
  return (
    <div>tweetId is {tweetid}</div>
  )
}

export default Tweet