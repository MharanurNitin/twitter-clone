import {
  // Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./DialogBox.css";
import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import TweetBox from "../tweetBox/TweetBox";
import useAddTweet from "../../utils/useAddTweet";
function DialogBox() {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [tweetMessage, setTweetMessage, handleTweetBtnClick] = useAddTweet(
    selectedFile,
    setSelectedFile
  );

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>opendialog</Button> */}
      <TwitterButton
        onClickAction={() => setOpen(true)}
        btnText="Tweet"
        variant="outlined"
        btnStyle="sidebar__tweet"
      />
      <Dialog
        className="dialog"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            width: "40%",
            height: "45%",
            marginTop: "-18rem",
            marginLeft: "2rem",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="dialogBox">
          <DialogTitle id="dialog-title" className="dialogTitle">
            <CloseIcon
              onClick={() => setOpen(false)}
              className="closeIcon"
              style={{ padding: ".5rem" }}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <TweetBox
                tweetMessage={tweetMessage}
                setTweetMessage={setTweetMessage}
                handleTweetBtnClick={handleTweetBtnClick}
                placeholderText="What's happening...?"
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default DialogBox;
