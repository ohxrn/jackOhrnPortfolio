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
          <p style={{ fontFamily: "Bayon" }}>Skills in Technology</p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon" }}>Projects</p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon" }}>Experience</p>
        </div>
        <div>
          <p style={{ fontFamily: "Bayon" }}>About me</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
