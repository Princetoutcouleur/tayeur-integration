import React from "react";
import "./HomePage.css"
import Navigation from "../reutilusables/Navigation";
import Banner from "./Banner"
import Content from "./Content";
import Footer from '../reutilusables/Footer'

const HomePage = () => {
  return (
    <div id="HomePage">
      <div className="container-fluid">
        {/* navbar */}
        <Navigation/>
        {/* banniére */}
        <Banner/>
        {/* content */}
        <Content/>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
