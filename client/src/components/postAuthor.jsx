import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../pics/profile-icon-design-free-vector.jpg"
export default function PostAuthor(){
  return(
    <Link to={`/posts/users/sdfsdf`}>
      <div className="post_author">
      <div >
        <img src={Avatar} className="post_author-avatar"></img>
      </div>
      <div className="post_author-details">
        <h5>By: Ernest Archiever</h5>
        <small>Just Now</small>
      </div>
      </div>
    </Link>
  )
}