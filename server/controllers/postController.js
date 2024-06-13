const Post = require('../models/postModel')
const User= require('../models/userModel')
const HttpError= require('../models/errorModel')
const path= require('path')
const fs= require('fs')
const {v4: uuid}= require('uuid')

//  api/posts
const createPost = async(req,res,next)=>{
  res.json("Create Post")
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