import React from "react";

const Projects = ({ targetRefProjects }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
      </style>
      <div
        style={{ display: "block", textAlign: "center", padding: "15%" }}
        ref={targetRefProjects}
        id="projects"
      >
        <h1
          style={{
            fontFamily: "Bayon",
            color: "#FF00FF",
            textAlign: "center",
            fontSize: "2.7rem",
          }}
        >
          Projects
        </h1>
        <div style={{ height: "600px" }}>
          <div className="nightOut">
            <div
              style={{
                border: "4px solid #FF00FF",
                maxWidth: "600px ",
                padding: "4%",
                margin: "0 auto",
                borderRadius: "45px",
                marginLeft: "20% auto",
                marginRight: "20% auto",
                marginBottom: "45px",
              }}
            >
              <img
                style={{ width: "50%" }}
                src="https://i.imgur.com/E1iHHaQ.png"
              />
              <a
                style={{
                  color: "pink",
                  display: "block",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
                href="https://github.com/ohxrn/NightOutOpenSource.git"
              >
                NightOut
              </a>
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <img
                    style={{ width: "100%", borderRadius: "13px" }}
                    src="https://i.imgur.com/U8SIlhK.png"
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", borderRadius: "13px" }}
                    src="https://i.imgur.com/JymeTEA.png"
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", borderRadius: "13px" }}
                    src="https://i.imgur.com/jFhCqJc.png"
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", borderRadius: "13px" }}
                    src="https://i.imgur.com/qQtTxTD.png"
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", borderRadius: "13px" }}
                    src="https://i.imgur.com/leINSRo.png"
                  />
                </div>
              </div>

              <p style={{ color: "white", fontFamily: "Bayon" }}>
                Currently an open source development, I am the director of A
                mobile application leveraging React, geolocation APIs, and
                MongoDB to revolutionize the club and nightlife experience.
                Seamlessly tracks real-time crowd density and energy levels,
                enabling users to discover and explore the city's hottest spots.
                Engineered to bring people together, fostering unforgettable
                nightlife adventures.
              </p>
            </div>

            <div
              style={{
                border: "4px solid #FF00FF",
                maxWidth: "600px ",
                padding: "4%",
                margin: "0 auto",
                borderRadius: "45px",
                marginLeft: "20% auto",
                marginRight: "20% auto",
                marginBottom: "45px",
              }}
            >
              <img
                style={{ width: "50%" }}
                src="https://i.imgur.com/kTbSu1x.png"
              />
              <a
                style={{ display: "block", textAlign: "center", color: "pink" }}
                href="https://github.com/ohxrn/FaceTrack"
              >
                Python Facial Recognition
              </a>
              <p style={{ color: "white", fontFamily: "Bayon" }}>
                In this cutting-edge project, I leveraged the power of Python
                and the OpenCV library to create a real-time face detection and
                tracking application. Utilizing advanced computer vision
                techniques, the program seamlessly identifies faces within a
                live camera feed and promptly responds by drawing a bounding box
                around each detected face.
              </p>
              <img
                style={{ width: "70%" }}
                src="https://i.imgur.com/ycdnuYo.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
