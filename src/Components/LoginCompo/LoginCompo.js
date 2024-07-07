import React, { useContext, useState } from "react";
import "./LoginCompo.css";
import MyContext from "../../Pages/MyContext";

const LoginCompo = (props) => {
  const { setshowSignup } = useContext(MyContext);
  const { login, setLogin } = useContext(MyContext);
  const [showPswrd, setShowPswrd] = useState(true);

  const navigateToSignup = () => {
    setshowSignup(true);
  };

  const handleInputChangeEmail = (e) => {
    setLogin((prevLogin) => ({
      ...prevLogin,
      email: e.target.value,
    }));
  };

  const handleInputChangePswrd = (e) => {
    setLogin((prevLogin) => ({
      ...prevLogin,
      password: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.handleFormSubmit();
  };

  const toggleEyeIcon = () => {
    setShowPswrd(!showPswrd);
  };
  return (
    <div className="login-component">
      <h3>Login</h3>
      <form onSubmit={submitForm}>
        <input
          type="email"
          name="email"
          value={login.email || ""}
          className="login-input"
          placeholder="Enter Email"
          onChange={handleInputChangeEmail}
        />

        <input
          type={showPswrd ? "password" : "text"}
          name="password"
          value={login.password || ""}
          className="login-input"
          placeholder="Password"
          onChange={handleInputChangePswrd}
        />
        <span onClick={toggleEyeIcon} style={{ position: "relative" }}>
          {showPswrd ? (
            <i className="fa-regular fa-eye" id="eye"></i>
          ) : (
            <i className="fa-regular fa-eye-slash" id="eye"></i>
          )}
        </span>
        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
      <div className="create-acnt">
        <span>Create your account</span>
        <span
          style={{ color: "orangered", cursor: "pointer" }}
          onClick={navigateToSignup}
        >
          Click here?
        </span>
      </div>
    </div>
  );
};

export default LoginCompo;
