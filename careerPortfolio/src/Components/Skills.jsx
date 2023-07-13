import React from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
</style>;
const Skills = () => {
  console.log(window);
  return (
    <div style={{ height: "950px" }}>
      <h1
        style={{
          fontFamily: "Bayon",
          color: "turquoise",
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
            style={{ width: "30%", display: "block", margin: "0 auto" }}
            src="../src/assets/python.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "turquoise",

              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            JavaScript
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <img
            style={{ width: "90%", display: "block", margin: "0 auto" }}
            src="../src/assets/js.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "turquoise",

              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            JavaScript
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <img
            style={{ width: "24%", display: "block", margin: "0 auto" }}
            src="../src/assets/JAVA.png"
          />
          <p
            style={{
              fontFamily: "Bayon",
              color: "turquoise",

              textAlign: "center",
              fontSize: "2.7rem",
            }}
          >
            Java
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
