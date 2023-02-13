import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ProfilePage from "./section/profilePage/ProfilePage";
import NoMatchRoute from "./NoMatchRoute";
import Feed from "./section/feed/Feed";
import Tweet from "./components/tweetpage/Tweet";
import ComposeTweet from "./pages/ComposeTweet";

function Router() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<Feed />} />
            <Route path=":handlerName" element={<ProfilePage />} />
            <Route path="tweet/:tweetid" element={<Tweet />} />
            <Route path="/compose/tweet" element={<ComposeTweet/>} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default Router;
