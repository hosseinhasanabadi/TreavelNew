import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "../Header/header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    if (!header) return; // جلوگیری از ارور در صورتی که المان پیدا نشود

    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header-section">
      <Container>
        <Row>
          <Navbar expand="lg" className="p-0">
            {/* {Logo section} */}
            <Navbar.Brand>
              <NavLink to="/">Weekendmonks</NavLink>
            </Navbar.Brand>
            {/* { end Logo section} */}{" "}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              {/* {mobile Logo section} */}
              <Offcanvas.Header>
                <h1 className="logo"> Weekendmonks </h1>
                <span className="navbar-toggler ms-auto " onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/* { end mobile Logo section} */}

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/">
                    About us
                  </NavLink>
                  <NavLink className="nav-link" to="/">
                    Tours
                  </NavLink>

                  <NavDropdown
                    title="Destination"
                    id={`offcanvasNavbarDropdown-expand-`}
                  >
                    <NavDropdown.Item href="#action3">
                      France Tours
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Italy tours
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      spania Tours
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/">
                    Gallery
                  </NavLink>
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
              <NavLink className="primaryBtn d-none d-sm-inline-block">
                Book Now
              </NavLink>
              <li
                className="d-inline-block d-lg-none ms-3
              toggle-btn"
              >
                <i
                  className={open ? "bi bi-x-lg" : "bi bi-list"}
                  onClick={toggleMenu}
                ></i>
              </li>
            </div>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
