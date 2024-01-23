import React, { useState } from "react";
//create a sign page

const initialData = { userName: "", password: "" };

const SignIn = ({ setUserDeatil }) => {
  const [userData, setUserData] = useState(initialData);
  const [message, setMessage] = useState(null);

  const { userName, password } = userData;

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);

    if (message === "" || password === "") {
      setMessage("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const data = await response.json();

      console.log("Status", response.status);

      if (response.ok) {
        console.log("login sucsess", data);
        setUserDeatil(data);
        localStorage.setItem("user data", JSON.stringify(data));
        setUserData(initialData);
      } else {
        console.log("login failed", data.message);
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.data.message);
    }
  }

  return (
    <div id="signIn">
      <form onSubmit={handleSubmit}>
        <div id="signInHeading">
          <p>Welcome Back!✋</p>
          <h2>Sign in to your Account</h2>
        </div>

        <div className="inputConatiner">
          <label>Your userName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserData({
                ...userData,
                userName: e.target.value,
              });
            }}
          />
        </div>

        <div className="inputConatiner">
          <label>Your Password</label>
          <input
            type="password" // Corrected type for password
            value={password}
            onChange={(e) => {
              setUserData({
                ...userData,
                password: e.target.value, // Update the password property
              });
            }}
          />
        </div>

        <div id="buttonMsg">
          <button>CONTINUE</button>
          <p>{message && <p>{message}</p>}</p>
        </div>
      </form>

      <a href="#">Forgot your password?</a>
      <p id="formFooter">
        Don't have a Account? <span>Sign up</span>
      </p>
    </div>
  );
};

export default SignIn;
