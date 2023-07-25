import { useRef, React, useState, useEffect } from "react";
import Skills from "./Skills";
import "../index.css";
import Projects from "./Projects";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
</style>;

export const ManageHome = () => {
  const scrollToRef = useRef(null);
  const [color, setColor] = useState("black");
  const enterSite = () => {
    window.scrollTo({ top: 980, behavior: "smooth" });
  };
  const changeBG = () => {
    setColor("blue");
  };

  const originalColor = () => {
    setColor("black");
  };
  return (
    <div>
      <p
        style={{
          fontFamily: "Bayon",
          fontSize: "6rem",
          textAlign: "center",
          margin: "0",
        }}
      >
        Jack Ohrn's Portfolio
      </p>
      <button
        style={{
          width: "20%",
          height: "45px",
          display: "block",
          margin: "0 auto",
          color: "rgba(0, 157, 255, 0.87)",
          backgroundColor: color,
          border: "3px solid rgba(0, 157, 255, 0.87)",
          borderRadius: "25px",
        }}
        onClick={() => {
          enterSite();
        }}
        onMouseOver={() => {
          changeBG();
        }}
        onMouseOut={() => {
          originalColor();
        }}
      >
        Enter Here
      </button>

      <Skills />
      <Projects />
    </div>
  );
};
