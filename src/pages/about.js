import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/about" });


const About = () => {
  return (
    <div>
      <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
    </div>
  );
};

export default About;
