import React from "react";
// import { Link } from "react-router-dom";
import ScrollableContainer from "react-full-page-scroll";

import { Scrollbars } from "react-custom-scrollbars";

import Layout from "./Layout";
import "/assets/scss/Home.scss";

import Main from "./home/Main";
import Intro from "./home/Intro";
import Education from "./home/Education";
import Technologies from "./home/Technologies";
import Portfolio from "./home/Portfolio";
import Contact from "./home/Contact";

const Home = () => {
  return (
    <Layout>
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Main></Main>
        <Intro></Intro>
        <Education></Education>
        <Technologies></Technologies>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </Scrollbars>
    </Layout>
  );
};

export default Home;
