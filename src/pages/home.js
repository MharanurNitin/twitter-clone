import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isUserLoggedInAtom, loggedUserData } from "../recoil-states";
import { useNavigate } from "react-router-dom";
import App from "../App";

export default function HomePage() {
  const isUserLoggedIn = useRecoilValue(isUserLoggedInAtom);
  const profile = useRecoilValue(loggedUserData);

  const nevigate = useNavigate();

  useEffect(() => {
    if (!profile) {
      nevigate("/signin");
    }
  }, [profile, nevigate]);
  return (
    <>
      {/* <h1>Welcome to the home page !!</h1> */}
      {/* <App/> */}
      {profile && <App />}
    </>
  );
}
