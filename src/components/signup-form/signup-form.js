
import { Dialog } from "@mui/material";
import style from "./signup-form.module.css";
import CustomInputField from "../../atoms/custom-input/custom-input";
import { useState } from "react";
import CustomSelect from "../../atoms/custom-select/custom-select";
import { totalTweets } from "../../recoil-states";
import { useRecoilState } from "recoil";
import { yearArray, monthArray, dateArray } from "../../const";
import CustomButton from "../../atoms/customButton/custom-button";
import {
  isValidEmailSyntax,
  isValidMobile,
  isOnlyLetters,
  isValidString,
} from "../../helper";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [isShowingEmailField, setIsShowingEmailField] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const nevigate = useNavigate();
  const [users, setUsers] = useState([]);

  function handleName(inputName) {
    setName(inputName);
  }
  function handlePhone(inputPhone) {
    setPhone(inputPhone);
  }
  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleYear(inputYear) {
    setYear(inputYear);
  }
  function handlePassword(inputPass) {
    setPassword(inputPass);
  }
function handleToggleAlternateField() {//togalling the input fields
  setIsShowingEmailField(!isShowingEmailField);
  setEmail("");
  setPhone("");
}
  function handleSubmit() {
    if (!isValidString(name) || !isOnlyLetters(name)) {
      toast.error("Invalid name !!");
      return;
    }
    if (!email && !phone) {
      toast.error("Please add email or phone to continue !!");
      return;
    }
    if (email && !isValidEmailSyntax(email)) {
      alert("Please add proper Email !!");
      return;
    }
    if (email) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          alert("user already exists");
          return;
        }
      }
    }
    if (phone && !isValidMobile(phone)) {
      alert("Please add proper phone !!");
      return;
    }
    if (phone) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].mobile === phone) {
          alert("user already exists");
          return;
        }
      }
    }
    if (!isValidString(password)) {
      alert("please set your account password !!");
      return;
    }
    if (!isValidString(date) || !isValidString(month) || !isValidString(year)) {
      toast.error("Invalid Date !!");
      return;
    }

    const NewUser = {
      profilePic:
        "https://imgs.search.brave.com/KmQGDsKIbS9uovoXTTibzrCUEOIXCzJ75xLt00q5WC0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0ucG5n",
      name,
      handlerName: `@Iam${name.split(" ").join("")}${Math.floor(Math.random()*10000)+333}`,
      organization: "",
      mobile: phone,
      email,
      password,
      dob: `${date}/${month}/${year}`,
      joinedDate: `${new Date().getMonth() + 1}-2023`,
      followers: 0,
      followings: 0,
      tweets: [],
    };
    localStorage.setItem("userList", JSON.stringify([NewUser,...users]));
    setUserRegistered(true);
  }
  useEffect(() => {
    if (userRegistered) {
      // console.log(users);
      nevigate("/signin");
    }
  }, [userRegistered]);
  
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("userList"))||[];
    setUsers(data);
      localStorage.setItem("userList", JSON.stringify(data));
  },[])
  return (
    <>
      <Dialog
        open
        PaperProps={{
          style: {
            borderRadius: 20,
          },
        }}
      >
        <div className={style.wrapper}>
          <h2>Create Your Account</h2>
          <CustomInputField
            customStyleInput={style.inputCss}
            placeholder="Name"
            handleOnChange={handleName}
          />

          {isShowingEmailField ? (
            <CustomInputField
              customStyleInput={style.inputCss}
              placeholder="Email"
              handleOnChange={handleEmail}
              value={email}
            />
          ) : (
            <CustomInputField
              customStyleInput={style.numberInput}
              placeholder="Phone"
              handleOnChange={handlePhone}
              type="number"
              value={phone}
            />
          )}

          <p
            style={{
              textAlign: "end",
              color: "#00acee",
              fontWeight: 700,
              margin: 0,
              cursor: "pointer",
            }}
            onClick={handleToggleAlternateField}
          >
            Use {`${isShowingEmailField ? "Phone" : "Email"}`} Instead
          </p>

          <CustomInputField
            customStyleInput={style.inputCss}
            placeholder="Password"
            handleOnChange={handlePassword}
            type="password"
          />

          <p className={style.birthHeading}>Date of Birth</p>
          <p className={style.birthDateInstruction}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={style.selectWrapper}>
            {/* we can handle this using map */}
            <CustomSelect
              data={dateArray}
              handleSelect={handleDate}
              defaultOption="Date"
            />
            <CustomSelect
              data={monthArray}
              handleSelect={handleMonth}
              defaultOption="Month"
            />
            <CustomSelect
              data={yearArray}
              handleSelect={handleYear}
              defaultOption="Year"
            />
          </div>
          <CustomButton
            isDarkBtnRequired
            customCss={style.submitBtn}
            buttonText="Submit"
            hanldleClickBtn={handleSubmit}
          />
        </div>
      </Dialog>
      <ToastContainer  />
    </>
  );
}
