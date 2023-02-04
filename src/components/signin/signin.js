
import style from "./signin.module.css";

import { SigningTemplate } from "../../templates/signing-template/signing-template";
import CustomInputField from "../../atoms/custom-input/custom-input";
import CustomButton from "../../atoms/customButton/custom-button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { totalTweets, loggedUserData } from "../../recoil-states";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

export default function SignInComponent() {
  // const users = useRecoilValue(totalTweets);
  const loggeduser = useRecoilValue(loggedUserData);
  const [, setLoggedInUser] = useRecoilState(loggedUserData);
  const [signInInput, setSignInInput] = useState(""); //it will contain email or phone input data.
  const [password, setPassword] = useState("");
  //   this is for the after clicking on next button open password input box
  const [isAskingPassword, setIsAskingPassword] = useState(false);
  //   This is for the savign data and then navigat to home page using useEffect
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [users,setUsers]=useState([]);
  const nevigate = useNavigate();

  const handleSignInInput = (inputVal) => {
    setSignInInput(inputVal);
  };
  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };
  function handleClickButton() {
    if (!signInInput) {
      alert("please Enter Email or Phone to continue !!");
      return;
    }
    let index = 0;
    if (signInInput) {
      let matched = false;

      for (let i = 0; i < users.length; i++) {
        if (signInInput === users[i].email || signInInput === users[i].mobile) {
          matched = true;
          index = i;
        }
      }
      if (!matched) {
        alert("please enter valid email or phone!This user not exists");
        return;
      }
    }

    if (signInInput && !isAskingPassword) {
      setIsAskingPassword(true);
      return;
    }
    if (!password) {
      alert("Please add pasword to continue !!");
      return;
    }
    if (password) {
      if (users[index].password !== password) {
        alert("please enter valid password");
        return;
      }
    }
    setLoggedInUser({ ...users[index],index });
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...users[index], index })
    );
    setUserLoggedIn(true);
  }
  useEffect(() => {
    if (userLoggedIn) {
      nevigate("/");
    }
  }, [userLoggedIn, loggeduser, nevigate]);
   useEffect(()=>{
     let data=JSON.parse(localStorage.getItem("userList"));
     data&&setUsers(data);
   },[])
  return (
    <SigningTemplate isSignInPage>
      {!isAskingPassword && (
        <CustomInputField
          placeholder="Phone or Email"
          handleOnChange={handleSignInInput}
        />
      )}
      {isAskingPassword && (
        <CustomInputField
          placeholder="Password"
          handleOnChange={handlePassword}
          type="password"
        />
      )}
      <CustomButton
        customCss={style.nextBtn}
        isDarkBtnRequired
        hanldleClickBtn={handleClickButton}
        buttonText={isAskingPassword ? "Submit" : "Next"}
      />
      <CustomButton buttonText="Forget Password ?" customCss={style.nextBtn} />
    </SigningTemplate>
  );
}
