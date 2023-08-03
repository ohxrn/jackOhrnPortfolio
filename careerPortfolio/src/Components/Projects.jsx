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
                See project here
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
                A mobile application leveraging React, geolocation APIs, and
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
                width: "60%",
                margin: "0 auto",
                borderRadius: "45px",
                marginBottom: "45px",
              }}
            >
              <img
                style={{ width: "50%" }}
                src="https://i.imgur.com/iDdS22j.png"
              />
              <a
                style={{ display: "block", textAlign: "center", color: "pink" }}
                href="https://github.com/ohxrn/Java-CRUD.git"
              >
                Click to view project
              </a>
              <p style={{ color: "white", fontFamily: "Bayon" }}>
                Using O.O.P., I developed a secure Java application leveraging
                the latest Spring technology for user authentication and
                authorization. The app provides a comprehensive CRUD interface
                to manage personalized classes, enabling users to create,
                modify, and delete their own classes while allowing others to
                join existing ones. With robust security features and seamless
                registration and login functionalities, the app ensures a
                seamless and user-friendly experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
