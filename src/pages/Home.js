
// import What from "./What";
// import "./home.css";
// import Featured from "./Featured";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import Header2 from "./Header2";
// import Hero2 from "./Hero2";
// import Services from "./Services";

// const Home = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       <Header2 />
//       {/* <Hero /> */}
//       <Hero2 />
//       {/* <What /> */}
//       <Services />
//       <Featured />

//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default Home;
import { useEffect } from "react";
import What from "./What";
import "./home.css";
import Featured from "./Featured";
import Contact from "./Contact";
import Footer from "./Footer";
import Header2 from "./Header2";
import Hero2 from "./Hero2";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    // Add dark mode by default
    document.body.classList.add("dark");

    // Optional: clean up if component unmounts
    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  return (
    <>
      <Header2 />
      <Hero2 />
      <Services />
      <Featured />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
