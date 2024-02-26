import Header from "../Header/Header";
import Search from "../Search/Search";
import Poster from "../Poster/Poster";
import Footer from "../Footer/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  sessionStorage.removeItem("selectedJob");
  return (
    <div className={styles["landing-page"]}>
      <Header />
      <Search />
      <div className={styles["poster-section"]}>
        <div className={styles.quote}>
          <p>
            "Embrace the job journey, trust your potential, and believe in your
            dream job. Success awaits!"
          </p>
        </div>
        <Poster />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
