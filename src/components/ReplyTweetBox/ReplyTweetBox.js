import React, { useEffect, useState } from "react";
import "./ReplyTweetBox.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {clickedcomment} from "../../recoil-states";

import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import TweetBox from "../tweetBox/TweetBox";
import useAddComment from "../../utils/useAddComment";
function ReplyDialogBox({ isVisible, setCommentBoxOpen }) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [clickedComment] = useRecoilState(clickedcomment);
  const [tweetMessage, setTweetMessage, handleTweetBtnClick] = useAddComment(
    selectedFile,
    setSelectedFile
  );
  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);
  function handleClose(){
    setOpen(false) 
    setCommentBoxOpen(false)
  }
  return (
    <>
      <Dialog
        className="dialog"
        open={open}
        // onClose={() => (setOpen(false) setCommentBoxOpen(false))}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "minmax(350px,500px)",
            height: "minmax(150px,160px)",
            marginTop: "-8rem",
            marginLeft: "2rem",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="dialogBox">
          <DialogTitle id="dialog-title" className="dialogTitle">
            <Link to="/">
              <CloseIcon
                onClick={handleClose}
                className="relpyCloseIcon"
                style={{ padding: ".5rem" }}
              />
            </Link>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <div className="replyDialog">
                <div className="reply">
                  <div className="replyAvatar">
                    <Avatar src={clickedComment?.profilePic} />
                  </div>
                  <div className="replyBody">
                    <div className="replyHeader">
                      <div className="replyHeaderText">
                        <h3>
                          {clickedComment?.name}
                          <span className="replyHeaderSpecial">
                            {clickedComment?.verified && (
                              <VerifiedUserIcon className="replyBadge" />
                            )}
                            {clickedComment?.handlerName} -{" "}
                            {clickedComment?.joinedDate}
                          </span>
                        </h3>
                      </div>
                      <div className="replyHeaderDescription">
                        <p>{clickedComment?.tweetText}</p>
                      </div>
                      <p>Replying to {clickedComment?.handlerName}</p>
                    </div>
                  </div>
                </div>
                <TweetBox
                  tweetMessage={tweetMessage}
                  setTweetMessage={setTweetMessage}
                  handleTweetBtnClick={handleTweetBtnClick}
                  placeholderText="Tweet your reply"
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default ReplyDialogBox;
