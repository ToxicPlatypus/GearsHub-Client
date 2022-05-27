import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Stats from "../Stats/Stats";
import Tools from "../Tools/Tools";
import Comment from "./Comment";
import Community from "./Community";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Stats></Stats>
      <Review></Review>
      <Community></Community>
      <Comment></Comment>
      <Footer></Footer>
    </div>
  );
};

export default Home;
