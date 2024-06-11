import React, {useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Logout = ()=>{
  const {setCurrentUser}= useContext(UserContext)
  const navigate= useNavigate()
  setCurrentUser(null)
  
  return(
    <div className="logout_page">
      <h1>You just looged out!!</h1>
      <Link to="/login">Sign in</Link>
    </div>
  )
}

export default Logout