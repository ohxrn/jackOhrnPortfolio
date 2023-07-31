import React from "react";

const Projects = ({ targetRefProjects }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
      </style>
      <div
        style={{ display: "block", textAlign: "center" }}
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
                width: "20%",
                margin: "0 auto",
                borderRadius: "45px",
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
                }}
                href="https://github.com/ohxrn/NightOutOpenSource.git"
              >
                See project here
              </a>
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
                width: "20%",
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
