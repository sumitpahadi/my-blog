import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="heading">
        <div className="inline1 inline">The</div>
        <div className="inline2 inline">Siren</div>
      </div>
      <nav>
        <div className="heading1">
          <div className="inline1 inline">The</div>
          <div className="inline2 inline">Siren</div>
        </div>

        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <hr className="hr" />
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <hr className="hr" />

          <li>
            <NavLink to="/bollywood" onClick={closeMenu}>
              Bollywood
            </NavLink>
          </li>
          <hr className="hr" />

          <li>
            <NavLink to="/technology" onClick={closeMenu}>
              Technology
            </NavLink>
          </li>
          <hr className="hr" />

          <li>
            <NavLink to="/hollywood" onClick={closeMenu}>
              Hollywood
            </NavLink>
          </li>
          <hr className="hr" />

          <li>
            <NavLink to="/fitness" onClick={closeMenu}>
              Fitness
            </NavLink>
          </li>
          <hr className="hr" />

          <li>
            <NavLink to="/food" onClick={closeMenu}>
              Food
            </NavLink>
          </li>
          <hr className="hr" />
        </ul>
      </nav>
      <hr />
    </>
  );
};
