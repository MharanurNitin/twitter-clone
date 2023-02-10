import { atom } from "recoil";

export const followButtonAtom = atom({
  key: "followButtonData",
  default: true,
});

export const isInterestAtom = atom({
  key: "isInterested",
  default: false,
});

export const selectFile = atom({
  key: "selectedFile",
  default: null,
});

export const clickedcomment=atom({
  key: "clickedComment",
  default:null,
})

export const tweetsList=atom({
  key: "tweets",
  default:[]
})
export const usersList = atom({
  key: "users",
  default: [],
});
