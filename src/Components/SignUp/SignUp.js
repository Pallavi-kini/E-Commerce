import React, { useContext } from "react";
import MyContext from "../../Pages/MyContext";

const SignUp = (props) => {
  const { setshowSignup } = useContext(MyContext);
  const { signupUser, setSignupUser } = useContext(MyContext);

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
        <input
          type="password"
          name="password"
          value={signupUser.password || ""}
          className="login-input"
          placeholder="Password"
          onChange={handleInputChangePswrd}
        />
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
