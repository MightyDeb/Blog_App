import React, { useState } from "react";
import Avatar from "../pics/profile-icon-design-free-vector.jpg"
import { Link } from "react-router-dom";

const authorsData= [
  {id:1, avatar: Avatar, name: 'Ernest Archiever', posts: 3},
  {id:2, avatar: Avatar, name: 'Jane Doe', posts: 5},
  {id:1, avatar: Avatar, name: 'Darmamai Mahama', posts: 6},
  {id:1, avatar: Avatar, name: 'Raju Rastogi', posts:1},
  {id:1, avatar: Avatar, name: 'Farhan Quresi', posts: 11},
]

const Author = ()=>{
  const [authors, setAuthors]= useState(authorsData)
  return(
    <section className="authors">
      {authors.length >0 ?
      <div className="authors_container">
      {
        authors.map((author)=>
            <Link key={author.id} to={`/posts/users/${author.id}`} className="author">
              <div >
                <img src={author.avatar} className="author_avatar" />                
              </div>
              <div className="author_info">
                <h4>{author.name}</h4>
                <small>{author.posts}</small>
              </div>
            </Link> 
        )
      }
    </div>  :  <h2>NO AUTHORS FOUND</h2>
      }
      
 </section>
  )
}

export default Author