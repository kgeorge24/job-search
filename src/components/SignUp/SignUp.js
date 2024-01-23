import React, { useState, useContext, Fragment } from "react";
import Header from "../Header/Header";
import { UserContext } from "../store/user-context";
import signupStyles from "./SignUp.module.css";
import loginStyles from "../Login/Login.module.css";

const SignUp = (props) => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const userCTX = useContext(UserContext);

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmailState(e.target.value);
    } else if (e.target.name === "password") {
      setPasswordState(e.target.value);
    } else if (e.target.name === "firstname") {
      setFirstNameState(e.target.value);
    } else if (e.target.name === "lastname") {
      setLastNameState(e.target.value);
    }
  };

  const formHandler = () => {
    if (props.formStatus === "logIn") {
      return (
        <form
          className={loginStyles.login}
          onSubmit={(e) => userCTX.loginSubmit(e, emailState, passwordState)}
        >
          <div className={loginStyles["login-container"]}>
            <div className={loginStyles.header}>
              <h4>Login</h4>
              <p>Enter your credentials in to gain access to your account.</p>
            </div>
            <div className={loginStyles.input}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={emailState}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className={loginStyles.input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={passwordState}
                onChange={(e) => changeHandler(e)}
              />
              <div>
                <a href="forgot-password">Forgot password?</a>
              </div>
            </div>
            <div className={loginStyles.submit}>
              <input type="submit" value="Login" />
              <p>
                Dont have an account? <a href="signup">Sign Up</a>
              </p>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <Fragment>
          <div>
            <form
              onSubmit={(e) =>
                userCTX.signupSubmit(
                  e,
                  firstNameState,
                  lastNameState,
                  emailState,
                  passwordState
                )
              }
            >
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  value={firstNameState}
                  name="firstname"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastNameState}
                  name="lastname"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  value={emailState}
                  name="email"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <label>Password(6+ characters)</label>
                <input
                  type="password"
                  value={passwordState}
                  name="password"
                  onChange={(e) => changeHandler(e)}
                />
                <p>
                  By clicking Agree & Join, you agree to the FindJobs{" "}
                  <a className={signupStyles.blue} href="user-agreement">
                    User Agreement
                  </a>
                  ,{" "}
                  <a className={signupStyles.blue} href="privacy-policy">
                    Privacy Policy
                  </a>
                  , and{" "}
                  <a className={signupStyles.blue} href="cookie-policy">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
              <button type="submit">Agree & Join</button>
            </form>
          </div>
          <div>
            <p>
              Already on FindJobs?{" "}
              <a className={signupStyles.blue} href="/login">
                Sign in
              </a>
            </p>
          </div>
        </Fragment>
      );
    }
  };

  return (
    <div className={signupStyles.signup}>
      <Header />
      <p>Securing employment should not pose a challenge.</p>
      <div>{formHandler()}</div>
    </div>
  );
};

export default SignUp;
