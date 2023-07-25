import React from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bayon&display=swap');
</style>;

const NavBar = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          marginLeft: "20px",
        }}
      >
        <div>
          <p style={{ fontFamily: "Bayon", color: "#FF00FF" }}>
            Skills in Technology
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon", color: "#FF00FF" }}>Projects</p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon", color: "#FF00FF" }}>Experience</p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon", color: "#FF00FF" }}>About me</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
