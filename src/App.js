import React from "react";
import Cards from "./components/Cards";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
