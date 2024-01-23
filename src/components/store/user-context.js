import React, { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const UserContext = createContext({
  user: "",
  loginSubmit: () => {},
  signupSubmit: () => {},
  logOut: () => {},
  saveJob: () => {},
  // usersSavedJobs: () => {},
  savedJobsList: {},
});

const UserContextProvider = (props) => {
  const [userState, setUserState] = useState();
  const auth = getAuth();

  // Submit functions for User Auth
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

  // Handles the signup for new users created an user and saving user data in the database.
  const signupSubmit = (e, firstname, lastname, email, password) => {
    e.preventDefault();
    function writeUserSignupData(userId, firstname, lastname, email) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        uid: userId,
      });
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        sessionStorage.setItem("uid", userCredential.user.uid);
        sessionStorage.setItem("userEmail", userCredential.user.email);
        writeUserSignupData(
          userCredential.user.uid,
          firstname,
          lastname,
          email
        );
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

  const saveJob = (job, userSavedJobs) => {
    const db = getDatabase();
    const uid = sessionStorage.getItem("uid");
    const uniqueId = Math.random().toString(36).substring(2, 9);
    set(ref(db, "savedJobs/" + uid + "/" + uniqueId), {
      jobId: job.job_id,
      jobTitle: job.title,
      jobCompanyName: job.company_name,
      uid: uniqueId,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: userState,
        loginSubmit: loginSubmit,
        signupSubmit: signupSubmit,
        logOut: logOut,
        saveJob: saveJob,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
