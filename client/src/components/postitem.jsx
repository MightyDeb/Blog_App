import React from "react";
import {Link} from "react-router-dom"
import PostAuthor from "./postAuthor"
export default function PostItem(props){
  const shortDesc = props.desc.length > 145 ? props.desc.substr(0,145)+'  ...Read More' : props.desc
  const shortTitle = props.title.length > 30 ? props.desc.substr(0,30)+'...' : props.title
  return(
  <article className="post">
    <div>
      <img src={props.thumbnail} className="post_thumbnail"></img>
    </div>
    <div className="post_content">
      <Link to={`/posts/${props.id}`}>
        <h3>{shortTitle}</h3>
      </Link>
      <p>{shortDesc}</p>
    </div>
    <div className="post_footer">
      <PostAuthor />
      <Link to={`/posts/categories/${props.category}`} className="post_button">
      {props.category}</Link>
    </div>
  </article>
  )
}