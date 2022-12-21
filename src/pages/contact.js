import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/contact" });

const Contact = () => {
  return (
    <div>
      <h1>Mail us on feedback@geeksforgeeks.org</h1>
    </div>
  );
};

export default Contact;
