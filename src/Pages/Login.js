import React from "react";
import "./Login.css";
import LoginCompo from "../Components/LoginCompo/LoginCompo";
import SignUp from "../Components/SignUp/SignUp";
import { useState } from "react";
import MyContext from "./MyContext";

const Login = () => {
  const [showSignup, setshowSignup] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = () => {};

  const handleSubmitSignupForm = () => {};
  return (
    <div className="login-page">
      <MyContext.Provider
        value={{ setshowSignup, login, setLogin, signupUser, setSignupUser }}
      >
        {showSignup ? (
          <SignUp
            signupUser={signupUser}
            handleSubmitSignupForm={handleSubmitSignupForm}
          />
        ) : (
          <LoginCompo
            showSignup={showSignup}
            login={{ login, setLogin }}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </MyContext.Provider>
    </div>
  );
};

export default Login;
