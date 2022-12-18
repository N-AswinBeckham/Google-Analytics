import React from "react";
import ReactGA from "react-ga";

const Contact = () => {
  ReactGA.pageview("/contact");
  return (
    <div>
      <h1>Mail us on feedback@geeksforgeeks.org</h1>
    </div>
  );
};

export default Contact;
