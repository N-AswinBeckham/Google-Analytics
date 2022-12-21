import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Google-Analytics/home" element={<Home />} />
        <Route path="Google-Analytics/about" element={<About />} />
        <Route path="Google-Analytics/contact" element={<Contact />} />
        <Route path="Google-Analytics/blogs" element={<Blogs />} />
        <Route path="Google-Analytics/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
