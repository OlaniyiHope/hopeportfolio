
import What from "./What";
import "./home.css";
import Featured from "./Featured";
import Contact from "./Contact";
import Footer from "./Footer";
import Header2 from "./Header2";
import Hero2 from "./Hero2";
import Services from "./Services";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Header2 />
      {/* <Hero /> */}
      <Hero2 />
      <What />
      <Services />
      <Featured />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
