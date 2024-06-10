import React, {useState} from "react"
import PostItem from "./postitem"
import DUMMY_POSTS from "./data"

const Posts= ()=>{
  const [posts, setPosts]= useState(DUMMY_POSTS)
  const Postlist= posts.map((item)=>{
    return(
       <PostItem key={item.id}
       thumbnail={item.thumbnail} category={item.category} title={item.title} desc={item.desc}authorID={item.authorID} />
    )
  })
  return(
    <section className="posts">
      {Postlist}
    </section>
  )
}

export default Posts
