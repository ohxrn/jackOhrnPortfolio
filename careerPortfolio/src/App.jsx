import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import HomePage from "./Components/HomePage";
import { ManageHome } from "./Components/ManageHome";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./index.css";

function App() {
  const targetRefProjects = useRef(null);
  const targetRefSkills = useRef(null);

  const scrollToTarget = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: currentScrollPosition + targetOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          marginLeft: "20px",
        }}
      >
        <div>
          <button
            onClick={() => scrollToTarget("skills")}
            style={{ width: "35%", height: "50px" }}
          ></button>
          <p style={{ fontFamily: "Bayon", color: "#FF00FF" }}>
            Skills in Technology
          </p>
        </div>
        <div>
          <p
            onClick={() => scrollToTarget("projects")}
            style={{ fontFamily: "Bayon", color: "#FF00FF" }}
          >
            Projects
          </p>
        </div>
        <div>
          <p
            onClick={() => scrollToTarget("experience")}
            style={{ fontFamily: "Bayon", color: "#FF00FF" }}
          >
            Experience
          </p>
        </div>
        <div>
          <p
            onClick={() => scrollToTarget("about-me")}
            style={{ fontFamily: "Bayon", color: "#FF00FF" }}
          >
            About me
          </p>
        </div>
      </div>

      <div className="canvas-container">
        <Canvas>
          <HomePage />
        </Canvas>
      </div>
      <ManageHome />
      <Skills targetRef={targetRefSkills} />
      <Projects targetRef={targetRefProjects} />
    </>
  );
}

export default App;
