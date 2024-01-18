import React, { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const UserContext = createContext({
  user: "",
  loginSubmit: () => {},
  signupSubmit: () => {},
  logOut: () => {},
});

const UserContextProvider = (props) => {
  const [userState, setUserState] = useState();
  const auth = getAuth();

  const loginSubmit = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        sessionStorage.setItem("uid", userCredential.user.uid);
        sessionStorage.setItem("userEmail", userCredential.user.email);
        window.location.pathname = "/";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const signupSubmit = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        sessionStorage.setItem("uid", userCredential.user.uid);
        sessionStorage.setItem("userEmail", userCredential.user.email);
        window.location.pathname = "/";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        sessionStorage.clear();
        setUserState({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <UserContext.Provider
      value={{
        user: userState,
        loginSubmit: loginSubmit,
        signupSubmit: signupSubmit,
        logOut: logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
