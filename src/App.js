import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./App.css";

function App() {
  console.log("The Entire App Rerendered!");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/results/:slug/:page/:chips/*" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
