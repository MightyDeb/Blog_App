const HttpError = require('../models/errorModel');
const User = require('../models/userModel')
const bcrypt= require('bcryptjs')
const jwt= require("jsonwebtoken")
require('dotenv').config()
//POST: api/users/register   REGISTER

const registerUser = async (req,res,next)=>{
  try{
    const {name, email, password, password2}= req.body;
    if(!name || !email || !password){
      return next(new HttpError("Fill in all fields.", 422))
    }
    const newEmail = email.toLowerCase()
    const emailExists = await User.findOne({email: newEmail})
    if(emailExists){
      return next(new HttpError("Email already exists.", 422))
    }
    if((password.trim()).length < 6){
      return next(new HttpError("Password should be atleast 6 characters.", 422))
    }
    if(password != password2){
      return next(new HttpError("Passwords do not match.", 422))
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPass= await bcrypt.hash(password, salt)
    const newUser = await User.create(
      {name, email: newEmail, password: hashedPass}
    )
    res.status(201).json(`New User ${newUser.email} registered.`)
  }catch(error){
    return next(new HttpError("User registration failed.", 422))
  }
}

//POST: api/users/login   LOGIN
const loginUser = async (req,res, next)=>{
  try{
    const {email, password}= req.body
    if(!email || !password){
      return next(new HttpError("Fill in all fields.", 422))
    }
    const newEmail = email.toLowerCase()
    const user = await User.findOne({email: newEmail})
    if(!user){
      return next(new HttpError("Invalid Credentials.", 422))
    }
    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword){
      return next(new HttpError("Invalid credentials. Incorrect Password.", 422))
    }
    //token
    const {_id: id, name}= user;
    const token= jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: "1d"})
    res.status(200).json({token, id, name})
  }catch(error){
    return next(new HttpError("Login failed. Please check your credentials.", 422))
  }
}
//GET: api/users/:id   VIEW USER PROFILE
const getUser = async (req,res)=>{
  res.json("User Profile")
}
//POST: api/users/change-avatar  CHANGE AVATAR
const changeAvatar = async (req,res)=>{
  res.json("Change user avatar")
}
//PATCH: api/users/edit-user   EDIT USER DETAILS
const editUser = async (req,res)=>{
  res.json("Edit user details")
}
//GET: api/users/
const getAuthors = async (req,res)=>{
  res.json("Get all users/authors")
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}