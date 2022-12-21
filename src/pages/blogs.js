import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/blogs" });

const Blogs = () => {
  return <h1>You can write your blogs!</h1>;
};

export default Blogs;
