import React from "react";
// header scs
import "../Navbar/Navbar.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaReact, FaBars } from "react-icons/fa";
// data
import { navbarData, sidebarSocialIcons } from "../Data/NavbarData";

const Header = () => {
  return (
    <>
      <header id="header">
        <Navbar expand="lg" className="shadow" fixed="top">
          <Container>
            <NavLink to="/">
              <Navbar.Brand>
                <FaReact className="animatedLogo" />
              </Navbar.Brand>
            </NavLink>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <span>
                <FaBars />
              </span>
            </button>
            <Navbar.Collapse>
              <Nav className="ms-auto py-3">
                {navbarData.map((menu) => (
                  <NavLink
                    exact
                    to={menu.link}
                    className="nav-link"
                    activeClassName="activeMenu"
                    key={menu.id}
                  >
                    {menu.title}
                  </NavLink>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* ------- sidebar---------  */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <NavLink className="navbar-brand" to="/">
            <FaReact className="sidebarLogo" />
          </NavLink>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-4">
            {navbarData.map((data) => (
              <li className="nav-item" key={data.id}>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="menu-active"
                  to={data.link}
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* social icons */}
          <ul className="list-inline mt-5 pt-5">
            {sidebarSocialIcons.map((data) => (
              <li className="list-inline-item" key={data.id}>
                <NavLink to={data.url} className="mx-2 socialLink">
                  {data.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------- sidebar---------  */}
    </>
  );
};

export default Header;
