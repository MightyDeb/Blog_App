import React from "react";
import { Link } from "react-router-dom";

const Logout = ()=>{
  return(
    <div className="logout_page">
      <h1>You just looged out!!</h1>
      <Link to="/login">Sign in</Link>
    </div>
  )
}

export default Logout