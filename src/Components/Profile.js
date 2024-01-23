import React from "react";

const Profile = ({ setUserDeatil }) => {
  const {
    id,
    firstName,
    maidenName,
    lastName,
    age,
    email,
    phone,
    image,
    username,
  } = JSON.parse(localStorage.getItem("user data"));
  function handleClick() {
    setUserDeatil({});
    localStorage.removeItem("user data");
  }
  return (
    <div id="profile">
      <div id="userDeatil">
        <h1>Profile</h1>
        <div id="userImage">
          <img src={image} alt={firstName} />
        </div>

        <div id="userInfo">
          <h4>ID : {id}</h4>
          <h4>{`User Name :   ${username}`}</h4>
          <h4>Email : {email}</h4>
          <h4>{phone !== undefined ? <p>Contact:{phone}</p> : null}</h4>
          <h4>
            Full name :
            {` ${firstName} ${maidenName !== undefined ? maidenName : ""} ${
              lastName !== undefined ? lastName : ""
            }`}
          </h4>
        </div>
      </div>

      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Profile;
