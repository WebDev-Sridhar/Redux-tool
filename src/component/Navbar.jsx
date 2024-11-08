import React from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";

const Navbar = () => {

  return (
  <nav>
    <h1>Sridhar</h1>
    <ul>
   <Link to="/" className="nav">Home</Link> 
   <Link to="/About" className="nav">About</Link> 
   <Link to="/Contact" className="nav">Contact</Link> 
   <Link to="/Profile"className="nav">Profile</Link> 
 
    </ul>
  </nav>
  )
};

export default Navbar;