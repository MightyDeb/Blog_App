import React, { useState } from "react";
import PostItem from "../components/postitem";
import DUMMY_POSTS from "../data";

const AuthorPost = ()=>{
  const [posts, setPosts]= useState(DUMMY_POSTS)
  return(
    <section className="author_posts">
      {
        posts.length > 0 ?
        <div className="author_posts_container">
          {
            posts.map((item)=> <PostItem key={item.id}
            thumbnail={item.thumbnail} category={item.category} title={item.title} desc={item.desc}authorID={item.authorID} />)
          }
        </div> :
        <h2>NO POSTS FOUND</h2>
      }
    </section>
  )
}

export default AuthorPost