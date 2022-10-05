import React from "react";
import Backed from "../components/Home/Backed/backed";
import Faq from "../components/Home/Faq/faq";
import Head from "../components/Home/Header/head";
import Inside from "../components/Home/Inside/inside";
import Mission from "../components/Home/Mission/mission";
import Saying from "../components/Home/Saying/saying";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/header";

const Home = () => {
  return (
    <div>
      <Header />

      <Head />
      <Mission />
      <Inside />
      <Saying />
      <Backed />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
