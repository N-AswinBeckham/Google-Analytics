import React, { useEffect } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import ReactGA from "react-ga";

const Navbar = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="Google-Analytics/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="Google-Analytics/about" activeStyle>
            About
          </NavLink>
          <NavLink to="Google-Analytics/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="Google-Analytics/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="Google-Analytics/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
