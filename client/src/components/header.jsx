import React from "react";
import {Link} from "react-router-dom"
import Logo from "../images/blog-icon-vector-image-can-be-used-public-relations-agency_120816-191834.avif"
import {FaBarsStaggered } from "react-icons/fa6";

const Header = ()=>{
  return(
    <nav>
      <div className="container my_container">
        <Link to="/" >
          <img src={Logo} className="nav_logo"></img>
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile">Your Profile</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav_toggle-btn">
            <FaBarsStaggered />
        </button>
      </div>
    </nav>
  )
}

export default Header