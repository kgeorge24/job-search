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
        <Route path="/results/:slug/:page/:chips/*" element={<ResultsPage />} />
        <Route path="signup" element={<Login formStatus="signUp" />} />
        <Route path="login" element={<Login formStatus="logIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
