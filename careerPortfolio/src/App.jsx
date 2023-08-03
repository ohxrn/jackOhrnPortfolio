import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import HomePage from "./Components/HomePage";
import { ManageHome } from "./Components/ManageHome";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { useState } from "react";
import "./index.css";

function App() {
  const targetRefProjects = useRef(null);
  const targetRefSkills = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Replace 300 with the vertical height where you want the div to become visible
      setIsVisible(window.pageYOffset > 700);
    };

    // Add event listener to update visibility on scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {isVisible && (
        <div
          className="navDiv"
          style={{
            position: "fixed",
            display: "flex",
            gap: "30px",
            justifyContent: "flex-start",
            backgroundColor: "red",
          }}
          id="poof"
        >
          <div>
            <p
              style={{ fontFamily: "Bayon", color: "#FF00FF" }}
              onClick={() => scrollToTarget("skills")}
            >
              Skills in Technology
            </p>
          </div>
          <div>
            <p
              onClick={() => scrollToTarget("projects")}
              style={{ fontFamily: "Bayon", color: "#FF00FF" }}
            >
              Projects / Experience
            </p>
          </div>
        </div>
      )}

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
