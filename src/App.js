import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Poster from "./components/Poster/Poster";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Poster />
      <Footer />
    </div>
  );
}

export default App;
