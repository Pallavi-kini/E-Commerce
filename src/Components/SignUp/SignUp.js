import React, { useContext, useState } from "react";
import MyContext from "../../Pages/MyContext";
import "./SignUp.css";

const SignUp = (props) => {
  const { setshowSignup } = useContext(MyContext);
  const { signupUser, setSignupUser } = useContext(MyContext);
  const [showPswrd, setShowPswrd] = useState(true);

  const handleNavigateToLogin = () => {
    setshowSignup(false);
  };

  const handleInputChangeName = (e) => {
    setSignupUser((data) => ({
      ...data,
      username: e.target.value,
    }));
  };

  const handleInputChangeEmail = (e) => {
    setSignupUser((data) => ({
      ...data,
      email: e.target.value,
    }));
  };

  const handleInputChangePswrd = (e) => {
    setSignupUser((data) => ({
      ...data,
      password: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.handleSubmitSignupForm();
  };

  const toggleEyeIcon = () => {
    setShowPswrd(!showPswrd);
  };

  return (
    <div className="login-component">
      <h3>SignUp</h3>
      <form onSubmit={submitForm}>
        <input
          type="name"
          name="name"
          value={signupUser.username || ""}
          className="login-input"
          placeholder="Enter Name"
          onChange={handleInputChangeName}
        />
        <input
          type="email"
          name="email"
          value={signupUser.email || ""}
          className="login-input"
          placeholder="Enter Email"
          onChange={handleInputChangeEmail}
        />
        <div style={{ display: "contents", position: "relative" }}>
          <input
            type={showPswrd ? "password" : "text"}
            name="password"
            value={signupUser.password || ""}
            className="login-input"
            placeholder="Password"
            onChange={handleInputChangePswrd}
          />
          <span className="eye-logo-signup" onClick={toggleEyeIcon}>
            {showPswrd ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </span>
        </div>
        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
      <div className="create-acnt">
        <span>Already have an account</span>
        <span
          style={{ color: "orangered", cursor: "pointer" }}
          onClick={handleNavigateToLogin}
        >
          Login here?
        </span>
      </div>
    </div>
  );
};

export default SignUp;
