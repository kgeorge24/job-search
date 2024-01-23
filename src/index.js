import React from "react";
import ReactDOM from "react-dom/client";
import SearchContextProvider from "./components/store/search-context";
import DropdownContextProvider from "./components/store/dropdown-context";
import UserContextProvider from "./components/store/user-context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3i22yQq3sFbVDjWBZupyaR2Cm54BPtoA",
  authDomain: "findjobs-63d01.firebaseapp.com",
  projectId: "findjobs-63d01",
  storageBucket: "findjobs-63d01.appspot.com",
  messagingSenderId: "153926067844",
  appId: "1:153926067844:web:6095e5a513a128c69544d1",
  measurementId: "G-Z3CGQ726HZ",
  databaseURL: "https://findjobs-63d01-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const databaseApp = initializeApp(firebaseDatabaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
console.log(database);
console.log(analytics);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <SearchContextProvider>
      <DropdownContextProvider>
        <App />
      </DropdownContextProvider>
    </SearchContextProvider>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
