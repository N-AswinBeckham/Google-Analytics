
import React from 'react';
import ReactGA from "react-ga";

const Blogs = () => {
	ReactGA.pageview("/blogs");

return (
	<h1>You can write your blogs!</h1>
);
};

export default Blogs;
