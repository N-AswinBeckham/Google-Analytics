import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/home" });

const Home = () => {
  return (
    <div>
      <h1>Aswin's Home page\.</h1>
    </div>
  );
};

export default Home;
