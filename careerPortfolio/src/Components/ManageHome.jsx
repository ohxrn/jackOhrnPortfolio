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
    window.scrollTo({ top: 850, behavior: "smooth" });
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
        className="textAd"
        style={{
          fontFamily: "Bayon",
          textAlign: "center",
          margin: "0",
        }}
      >
        Jack Ohrn's Portfolio
      </p>
      <button
        className="textAdjust"
        style={{
          display: "block",

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
    </div>
  );
};
