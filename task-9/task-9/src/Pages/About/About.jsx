import React from "react";

const About = () => {
  if (true) {
    throw new Error("crashed");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>About</h1>
    </div>
  );
};
export default About;
