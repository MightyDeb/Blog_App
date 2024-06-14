const Post = require('../models/postModel')
const User= require('../models/userModel')
const HttpError= require('../models/errorModel')
const path= require('path')
const fs= require('fs')
const {v4: uuid}= require('uuid')

//  api/posts
const createPost = async(req,res,next)=>{
  try{
    let {title,category,description}= req.body
    if(!title || !category || !description || !req.files){
      return next(new HttpError('Fill in all fields and choose thumbnail', 422))
    }
      const {thumbnail}= req.files
      if(thumbnail.size > 2000000){
        return next(new HttpError('Thumbnail too big.File should be less than 2mb.'))
      }
      let fileName= thumbnail.name;
      let splittedFilename = fileName.split('.')
      let newFilename= splittedFileName[0]+uuid()+"."+splittedFilename[splittedFilename.length-1]
      thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async (err)=>{
        if(err){
          return next(new HttpError(err))
        }else{
          const newPost= await Post.create({title, category, description, thumbnail: newFilename, creator: req.user.id})
          if(!newPost){
            return next(new HttpError("Post couldn't be created.", 422))
          }
          //find user and increase post count
          const currentUser = await User.findById(req.user)
          const userPostCount = currentUser.posts +1;
          await User.findByIdAndUpdate(req.user.id, {posts: userPostCount})
          res.status(201).json(newPost)
          
        }
      })
  }
  catch(error){
    return next(new HttpError(error))
  }
}
//  api/posts
const getPosts = async(req,res,next)=>{
  res.json("Get Posts")
}
//  api/posts/:id
const getPost = async(req,res,next)=>{
  res.json("Get Single Post")
}
//  api/posts/categories/:category
const getCatPosts = async(req,res,next)=>{
  res.json("Get Posts By Category")
}
//  api/posts/users/:id
const getUserPosts = async(req,res,next)=>{
  res.json("Get User Post")
}
//  api/posts/:id
const editPost = async(req,res,next)=>{
  res.json("Edit Post")
}
//  api/posts/:id
const deletePost = async(req,res,next)=>{
  res.json("Delete Post")
}

module.exports= {createPost, getPosts, getPost, getCatPosts, getUserPosts, editPost, deletePost};