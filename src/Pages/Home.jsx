import React from "react";
import Introduce from "../Templates/Introduce";
import About from "../Templates/About";
import Skills from "../Templates/Skills";
import RecentProjects from "../Templates/RecentProjects";
import Experience from "../Templates/Experience";
import Contact from "../Templates/Contact";

const Home = () => {
  return (
    <main className="main">
      <Introduce />
      <About />
      <Skills />
      <RecentProjects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
