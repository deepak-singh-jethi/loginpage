import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";

const App = () => {
  const [userDetail, setUserDeatil] = useState({});
  return (
    <>
      <div id="diagonal-line"></div>
      {!localStorage.getItem("user data") ? (
        <SignIn setUserDeatil={setUserDeatil}></SignIn>
      ) : (
        <Profile setUserDeatil={setUserDeatil} />
      )}
    </>
  );
};

export default App;
