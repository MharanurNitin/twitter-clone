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
