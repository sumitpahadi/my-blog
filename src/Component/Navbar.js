import React, { useState } from "react";

import "./Navbar.css";
import {NavLink}  from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
     
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
      
        <li>
          <NavLink to="/">Home</NavLink>
          
        </li>
        
        <li>
          <NavLink to="/bollywood">Bollywood</NavLink>
        </li>
       
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
       
        <li>
          <NavLink to="/hollywood">Hollywood</NavLink>
        </li>
       
        <li>
          <NavLink to="/fitness">Fitness</NavLink>
        </li>
        
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
     
    </nav>
    <hr />
   
    </>
  );
};
