import { useState, useContext } from "react";
import { UserContext } from "../store/user-context";
import styles from "./Login.module.css";
import Input from "../reusableComponents/Input/Input";

const Login = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const userCTX = useContext(UserContext);

  const changeHandler = (e) => {
    e.target.id === "email"
      ? setEmailState(e.target.value)
      : setPasswordState(e.target.value);
  };

  
  return (
    <form
      className={styles.login}
      onSubmit={(e) => userCTX.loginSubmit(e, emailState, passwordState)}
    >
      <div className={styles["login-container"]}>
        <div className={styles.header}>
          <h4>Login</h4>
          <p>Enter your credentials in to gain access to your account.</p>
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            id="email"
            value={emailState}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            value={passwordState}
            onChange={changeHandler}
          />
          <div>
            <a href="forgot-password">Forgot password?</a>
          </div>
        </div>
        <div className={styles.submit}>
          <Input type="submit" value="Login" />
          <p>
            Dont have an account? <a href="sign-up">Sign Up</a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
