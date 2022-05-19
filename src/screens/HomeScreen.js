import React from "react";
import Header from "./../components/Header";
import ToySection from "./../components/homeComponents/ToySection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header />
      <ToySection  />
      <Footer />
    </div>
  );
};

export default HomeScreen;
