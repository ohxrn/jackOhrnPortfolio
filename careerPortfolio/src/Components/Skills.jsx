import React from "react";
import { useEffect } from "react";
import "../index.css";
import "../skills.css";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
</style>;
const Skills = ({ targetRefSkills }) => {
  useEffect(() => {
    const images = document.querySelectorAll(".fade-in-image");

    const observerOptions = {
      threshold: 0.2, // Adjust this value to control when the fade-in effect starts
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <>
      <div
        style={{ height: "950px" }}
        ref={targetRefSkills}
        id="skills"
        className="skills"
      >
        <h1 style={{ marginTop: "200px" }} className="mySkills">
          My Skills
        </h1>
        <div
          className="flexIt"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "600px",
          }}
        >
          <div className="left" style={{ flex: "1" }}>
            <img
              className="fade-in-image"
              style={{
                width: "30%",
                display: "block",
                margin: "0 auto",
              }}
              src="https://i.imgur.com/uzSPa1s.png"
            />
            <p className="pTitle">Python</p>

            <div className="gradient"></div>
            <h3 className="textLeft">Flask + MySql</h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "15%" }}
            >
              <img
                className="fade-in-image"
                style={{ width: "24%" }}
                src="https://i.imgur.com/ySmPswh.png"
              />
              <img
                className="fade-in-image"
                style={{ width: "24%" }}
                src="https://i.imgur.com/23XHo4Z.png"
                alt="MySQL Image"
              />
            </div>
          </div>

          <div className="middle" style={{ flex: "1" }}>
            <img
              className="fade-in-image"
              style={{
                width: "90%",
                display: "block",
                margin: "0 auto",
              }}
              src="https://i.imgur.com/feSDGuj.png"
            />
            <p className="pTitle">JavaScript</p>

            <div className="gradient"></div>
            <h3 style={{ marginLeft: "16px" }} className="textLeft">
              React + JavaScript + Three.js + MongoDB
            </h3>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10%",
                }}
              >
                <img
                  className="fade-in-image"
                  style={{ width: "36%", height: "36%" }}
                  src="https://i.imgur.com/feSDGuj.png"
                />

                <img
                  className="fade-in-image"
                  style={{ width: "22%", height: "22%" }}
                  src="https://i.imgur.com/2jJa8mA.png"
                />
              </div>
              <div style={{ display: "flex" }}>
                <img
                  className="fade-in-image"
                  style={{
                    width: "33%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  src="https://i.imgur.com/UQYyK4T.png"
                />
                <img
                  style={{
                    width: "23%",
                    height: "23%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  src="https://i.imgur.com/PnmzcwR.png"
                />
              </div>
            </div>
          </div>
          <div className="right" style={{ flex: "1" }}>
            <img
              className="fade-in-image"
              style={{
                width: "24%",
                display: "block",
                margin: "0 auto",
              }}
              src="https://i.imgur.com/iDdS22j.png"
            />
            <p className="pTitle">Java</p>
            <div className="gradient"></div>
            <h3 className="textLeft">Spring + MySQL </h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "15%" }}
            >
              <img
                style={{ width: "26%", height: "26%" }}
                src="https://i.imgur.com/KiUZqvr.png"
              />

              <img
                className="fade-in-image"
                style={{ width: "26%" }}
                src="https://i.imgur.com/23XHo4Z.png"
                alt="MySQL Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
