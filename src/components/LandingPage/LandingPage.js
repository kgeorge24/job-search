import { Fragment } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Poster from "../Poster/Poster";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <Search />
      <Poster />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
