import style from "./signing-template.module.css";
import { Dialog } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SigningOption from "../../atoms/signing-option/signIn-option";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
// BsApple
export function SigningTemplate({ children, isSignInPage }) {
  const nevigate = useNavigate();
  const matches = useMediaQuery("(min-width:660px)");
  const SignInOptions = [
    {
      icon: <FcGoogle className={style.icon} />,
      signInText: `Sign ${isSignInPage ? "In" : "Up"} With Google`,
    },
    {
      icon: <BsApple className={style.icon} />,
      signInText: `Sign ${isSignInPage ? "In" : "Up"}  With Apple`,
      stylingData: {
        textStyle: style.textStyle,
      },
    },
  ];

  function handleRedirect() {
    if (isSignInPage) {
      nevigate("/signup");
      return;
    }
    nevigate("/signin");
  }

  return (
    <Dialog
      open
      
      PaperProps={{
        style: {
          borderRadius: 20,
          boxShadow: matches ? "4px 4px 20px rgba(0,0,0,0.25" : "none",
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor: matches ? "gray" : "white",
        },
      }}
    >
    {/* <div className={style.container}> */}
      <div className={style.wrapper}>
        <div className={style.twitterIconWrapper}>
          <TwitterIcon
            className={style.twitterIcon}
            fontSize="large"
            sx={{ color: "#00acee" }}
          />
        </div>
        <h1 className={style.heading}>
          {isSignInPage ? "Sign in to Twitter" : "Join Twitter Today"}
        </h1>

        {SignInOptions.map((optionDetail, index) => (
          <SigningOption optionDetail={optionDetail} key={index} />
        ))}
        <div className={style.seprator}>
          {["", "or", ""].map((ele) => (
            <span className={style.spanTag}>{ele}</span>
          ))}
        </div>

        {children}

        <p className={style.footText}>
          {`${
            isSignInPage
              ? "Dont have an account ? "
              : "Already have an account ."
          }`}
          <span className={style.redirectText} onClick={handleRedirect}>
            {`${isSignInPage ? "Sign Up" : "Sign In"}`}
          </span>
        </p>
      </div>
    </Dialog>
    // </div>
  );
}
