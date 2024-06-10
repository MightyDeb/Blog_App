import React, { useState } from "react";
import DUMMY_POSTS from "../data";
import { Link } from "react-router-dom";
const Dashboard = ()=>{
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return(
    <section className="dashboard">
      { posts.length > 0 ?
        <div className="dashboard_container">
          {
            posts.map((post)=>{
              return <article key={post.id}  className="dashboard_post">
                <div className="dashboard_post-info">
                  <img src={post.thumbnail} className="dashboard_post-thumbnail"/>
                  <h3>{post.title}</h3>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.id}`} className="dashboard_btn">View</Link>
                  <Link to={`/posts/${post.id}/edit`} className="dashboard_btn">Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className="dashboard_btn">Delete</Link>
                </div>
              </article>
            })
          }
        </div> : <h2>You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard