import React from "react";
import ReactGA from "react-ga";

const About = () => {
  ReactGA.pageview("/about");
  return (
    <div>
      <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
    </div>
  );
};

export default About;
