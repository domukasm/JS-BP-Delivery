import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [navClass, setNavClass] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavClass("navbar-scrolled");
    } else {
      setNavClass("");
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 1100) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className={`navbar ${navClass} `}
      style={{
        position: "fixed",
        paddingTop: "2rem",
        width: "80%",
        margin: "0 auto",
        padding: "20px 60px",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/list">Containers List</Nav.Link>
      </Nav>

      <div className="d-flex justify-content-center">
        <Navbar.Brand href="#">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            height="50"
            className="d-inline-block align-top"
            alt="FundMe logo"
          />
        </Navbar.Brand>
      </div>

      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/create">Create Parcel</Nav.Link>
        <Nav.Link as={Link} to="/signin">Sign Up / Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;