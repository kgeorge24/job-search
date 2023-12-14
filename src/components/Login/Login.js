import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const changeHandler = (e) => {
    e.target.id === "email"
      ? setEmailState(e.target.value)
      : setPasswordState(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Email: ", emailState);
    console.log("Password: ", passwordState);
  };

  return (
    <form className={styles.login} onSubmit={submitHandler}>
      <div className={styles["login-container"]}>
        <div className={styles.header}>
          <h4>Login</h4>
          <p>Enter your credentials in to gain access to your account.</p>
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={emailState}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState}
            onChange={changeHandler}
          />
          <div>
            <a href="">Forgot password?</a>
          </div>
        </div>
        <div className={styles.submit}>
          <input type="submit" value="Login" />
          <p>
            Dont have an account? <a href="">Sign Up</a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
