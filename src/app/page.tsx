import { Section } from "@radix-ui/themes";
import React from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

const Home = () => {
  return (
    <div>
      <Hero />

      <Projects />

      <Skills />
    </div>
  );
};

export default Home;
