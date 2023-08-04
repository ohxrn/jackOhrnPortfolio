import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import HomePage from "./Components/HomePage";
import { ManageHome } from "./Components/ManageHome";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { useState, Suspense } from "react";
import "./index.css";

function App() {
  const targetRefProjects = useRef(null);
  const targetRefSkills = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [navDivOpacity, setNavDivOpacity] = useState(0); // Added opacity state

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
      // Replace 700 with the vertical height where you want the div to become visible
      setIsVisible(window.pageYOffset > 700);
    };

    // Add event listener to update visibility on scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the opacity state based on the isVisible state with a fade-in effect
    if (isVisible) {
      let opacity = 0;
      const intervalId = setInterval(() => {
        opacity += 1.9;
        if (opacity >= 1) {
          opacity = 1;
          clearInterval(intervalId);
        }
        setNavDivOpacity(opacity);
      }, 30); // Adjust the interval time (in milliseconds) to control the speed of the fade-in
    } else {
      setNavDivOpacity(0);
    }
  }, [isVisible]);

  const scrollToTarget = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top - 50;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: currentScrollPosition + targetOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Suspense
      fallback={
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "1000vh",
            backgroundColor: "black",
            fontSize: "3rem",
          }}
        >
          <h1 style={{ marginTop: "250px" }}>Rendering...</h1>
        </div>
      }
    >
      {isVisible && (
        <div
          className="navDiv"
          style={{
            margin: "0",
            position: "fixed",
            width: "100%",
            display: "flex",
            gap: "60px",
            justifyContent: "flex-start",
            opacity: navDivOpacity,
            transition: "opacity 1s linear",
            background: "rgb(238, 174, 202)",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          }}
          id="poof"
        >
          <div>
            <p
              style={{
                fontFamily: "Bayon",
                color: "#FF00FF",
                marginLeft: "20px",
              }}
              onClick={() => scrollToTarget("skills")}
            >
              Skills in Technology
            </p>
          </div>
          <div>
            <p
              onClick={() => scrollToTarget("projects")}
              style={{
                fontFamily: "Bayon",
                color: "#FF00FF",
              }}
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
    </Suspense>
  );
}

export default App;
