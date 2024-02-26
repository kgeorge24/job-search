import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Login from "./components/UserAccountForm/UserAccountForm";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        {window.innerWidth > 1000 ? (
          <Route
            exact
            path="/results/:slug/:page/:chips/:jobId/*"
            element={<ResultsPage />}
          />
        ) : null}
        <Route
          exact
          path="/results/:slug/:page/:chips"
          element={<ResultsPage />}
        />
        {/* {window.innerWidth < 1000 ? (
          <Route
            path="/results/:slug/:page/:chips/:jobId/*"
            element={<JobListing />}
          />
        ) : null} */}
        <Route path="signup" element={<Login formStatus="signUp" />} />
        <Route path="login" element={<Login formStatus="logIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
