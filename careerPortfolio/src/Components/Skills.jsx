import React from "react";
import { useEffect } from "react";
import "../index.css";

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
    <div style={{ height: "950px" }} ref={targetRefSkills} id="skills">
      <h1
        style={{
          fontFamily: "Bayon",
          color: "#FF00FF",
          marginTop: "270px",
          textAlign: "center",
          fontSize: "2.7rem",
        }}
      >
        My Skills
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: "1" }}>
          <img
            className="fade-in-image"
            style={{
              width: "30%",
              display: "block",
              margin: "0 auto",
            }}
            src="https://i.imgur.com/uzSPa1s.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "#FF00FF",

              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            Python
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <img
            className="fade-in-image"
            style={{
              width: "90%",
              display: "block",
              margin: "0 auto",
            }}
            src="https://i.imgur.com/feSDGuj.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "#FF00FF",

              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            JavaScript
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <img
            className="fade-in-image"
            style={{
              width: "24%",
              display: "block",
              margin: "0 auto",
            }}
            src="https://i.imgur.com/iDdS22j.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "#FF00FF",
              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            Java
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "11px",
            height: "20px",
            flex: "1",
          }}
        >
          <div>
            <div
              style={{
                width: "4px",
                minHeight: "40px",
                background:
                  "-moz-linear-gradient(190deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%)",

                margin: "0 auto",
                boxShadow: "0 0 14px 5px rgba(0, 20, 255, 0.9)",
              }}
            ></div>
            <div>
              <h1
                style={{
                  marginLeft: "5px",
                  textAlign: "center",
                  fontFamily: "Bayon",
                  color: "#FF00FF",
                }}
              >
                Flask | MySql
              </h1>
            </div>
            <div style={{ display: "flex", gap: "75px" }}>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  className="fade-in-image"
                  style={{ width: "64%" }}
                  src="https://i.imgur.com/ySmPswh.png"
                />
              </div>
              <div style={{ flex: "1", justifyContent: "flex-start" }}>
                <img
                  className="fade-in-image"
                  style={{ width: "94%" }}
                  src="https://i.imgur.com/23XHo4Z.png"
                  alt="MySQL Image"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "5px",
            height: "50px",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "block",
              width: "5px",
              background:
                "-moz-linear-gradient(190deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%)",
              margin: "0 auto",
              boxShadow: "0 0 14px 5px rgba(0, 20, 255, 0.9)",
              height: "7vh",
              position: "relative",
              bottom: "35px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "150px",
            height: "20px",
            flex: "1",
          }}
        >
          <div style={{ position: "relative", bottom: "120px" }}>
            <div
              style={{
                width: "4px",
                height: "280px",
                background:
                  "-moz-linear-gradient(190deg, rgba(238, 130, 238, 1) 0%, rgba(0, 0, 255, 1) 100%)",
                margin: "0 auto",
                boxShadow: "0 0 14px 5px rgba(0, 20, 255, 0.9)",
              }}
            ></div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontFamily: "Bayon", color: "#FF00FF" }}>
                Spring | MySql
              </h1>
            </div>
            <div style={{ display: "flex", gap: "25px" }}>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  style={{ width: "62%", height: "62%" }}
                  src="https://i.imgur.com/KiUZqvr.png"
                />
              </div>
              <div style={{ flex: "1", justifyContent: "flex-start" }}>
                <img
                  className="fade-in-image"
                  style={{ width: "94%", marginBottom: "90px" }}
                  src="https://i.imgur.com/23XHo4Z.png"
                  alt="MySQL Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Bayon",
            margin: "0",
            color: "#FF00FF",
          }}
        >
          THREE.JS | React.JS | MongoDB
        </h1>
        <div style={{ display: "flex", gap: "60px" }}>
          <div
            style={{
              flex: "1",

              display: "flex",
              justifyContent: "flex-end" /* Aligns content to the right */,
              alignItems: "center" /* Centers the content vertically */,
            }}
          >
            <img
              className="fade-in-image"
              style={{ width: "13%" }}
              src="https://i.imgur.com/feSDGuj.png"
            />
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "flex-start" /* Aligns content to the right */,
              alignItems: "center",
            }}
          >
            <img
              className="fade-in-image"
              style={{ width: "11%" }}
              src="https://i.imgur.com/2jJa8mA.png"
            />
          </div>
        </div>
        <img
          className="fade-in-image"
          style={{
            width: "13%",
            display: "block",
            margin: "0 auto",
            position: "relative",
            bottom: "15px",
          }}
          src="https://i.imgur.com/UQYyK4T.png"
        />
      </div>
    </div>
  );
};

export default Skills;
