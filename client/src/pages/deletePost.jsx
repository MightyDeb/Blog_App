import React from "react";
import { Link } from "react-router-dom";

const DeletePost = ()=>{
  return(
    <div className="delete">
    <h1>Your Post is deleted</h1>
    <span>Go back to your posts </span>
    <Link to={`/myposts/sdfsdf`}>My Posts</Link>
    </div>
  )
}

export default DeletePost