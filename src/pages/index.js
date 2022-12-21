import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/index" });

const Home = () => {
  return (
    <div>
      <h1>Welcome to GeeksforGeeks</h1>
    </div>
  );
};

export default Home;
