import React from "react";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/Google-Analytics/signup" });

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up Successful</h1>
    </div>
  );
};

export default SignUp;
