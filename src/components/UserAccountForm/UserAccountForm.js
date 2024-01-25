import { useState, useContext, Fragment } from "react";
import { UserContext } from "../store/user-context";
import UserAccountForm from "../reusableComponents/ContainerPage/ContainerPage";
import Form from "../reusableComponents/Form/Form";
import Input from "../reusableComponents/Input/Input";
import InputWrapper from "../reusableComponents/InputWrapper/InputWrapper";
import styles from "./Login.module.css";

const Login = (props) => {
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
        <Fragment>
          <Form
            onSubmit={(e) => userCTX.loginSubmit(e, emailState, passwordState)}
          >
            <header>
              <h4>Login</h4>
              <p>Enter your information in the fields below and click login.</p>
            </header>
            <InputWrapper>
              <label htmlFor="email">Email</label>
              <Input
                className="input"
                type="text"
                name="email"
                value={emailState}
                onChange={(e) => changeHandler(e)}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <Input
                className="input"
                type="password"
                name="password"
                value={passwordState}
                onChange={(e) => changeHandler(e)}
              />
              <div>
                <a href="forgot-password">Forgot password?</a>
              </div>
            </InputWrapper>
            <button type="submit">Login</button>
            <div>
              <p>
                Dont have an account?{" "}
                <a href="signup" className={styles.blue}>
                  Sign Up
                </a>
              </p>
            </div>
          </Form>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Form
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
            <header>
              <h4>Sign Up</h4>
              <p>
                Fill in the fields below and click "Agree & Join" to sign up.
              </p>
            </header>
            <InputWrapper>
              <label>First Name</label>
              <Input
                className="input"
                type="text"
                value={firstNameState}
                name="firstname"
                onChange={(e) => changeHandler(e)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Last Name</label>
              <Input
                className="input"
                type="text"
                value={lastNameState}
                name="lastname"
                onChange={(e) => changeHandler(e)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Email</label>
              <Input
                className="input"
                type="text"
                value={emailState}
                name="email"
                onChange={(e) => changeHandler(e)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Password(6+ characters)</label>
              <Input
                className="input"
                type="password"
                value={passwordState}
                name="password"
                onChange={(e) => changeHandler(e)}
              />
              <p>
                By clicking Agree & Join, you agree to the FindJobs{" "}
                <a className={styles.blue} href="user-agreement">
                  User Agreement
                </a>
                ,{" "}
                <a className={styles.blue} href="privacy-policy">
                  Privacy Policy
                </a>
                , and{" "}
                <a className={styles.blue} href="cookie-policy">
                  Cookie Policy
                </a>
                .
              </p>
            </InputWrapper>
            <button type="submit">Agree & Join</button>
            <div>
              <p>
                Already on FindJobs?{" "}
                <a className={styles.blue} href="/login">
                  Sign in
                </a>
              </p>
            </div>
          </Form>
        </Fragment>
      );
    }
  };
  return (
    <UserAccountForm>
      <p>Securing employment should not pose a challenge.</p>
      <div>{formHandler()}</div>
    </UserAccountForm>
  );
};

export default Login;
