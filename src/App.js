import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/results/:slug/:page/:chips/*" element={<ResultsPage />} />
        <Route path="signup" element={<SignUp formStatus="signUp" />} />
        <Route path="login" element={<SignUp formStatus="logIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
