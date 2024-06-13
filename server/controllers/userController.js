const HttpError = require('../models/errorModel');
const User = require('../models/userModel')
const bcrypt= require('bcryptjs')
const jwt= require("jsonwebtoken")
require('dotenv').config()
const fs= require('fs')
const path= require('path')
const {v4: uuid}= require('uuid')

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
const getUser = async (req,res,next)=>{
  try{
    const {id}= req.params;
    const user= await User.findById(id).select('-password');
    if(!user){
      return next(new HttpError("User not found.", 404))
    }
    res.status(200).json(user)
  }catch(error){
    return next(new HttpError(error))
  }
}
//POST: api/users/change-avatar  CHANGE AVATAR
const changeAvatar = async (req,res,next)=>{
  try{
    if(!res.files.avatar){
      return next(new HttpError("Please choose an image.", 422))
    }
    ////find user from database
    const user= await User.findById(req.user.id)
    //delete old avatar if exists
    if(user.avatar){
      fs.unlink(path.join(__dirname,"..",'uploads', user.avatar), (err)=>{
        if(err){
          return next(new HttpError(error))
        }
      })
    }
    const {avatar}= req.files;
    if(avatar.size > 500000){
      return next(new HttpError("Profile picture too big. Should be less than 500kb"), 422)
    }
    let fileName = avatar.name;
    let splittedfileName= fileName.split(".")
    let newFileName = splittedfileName[0]+ uuid() + "." + splittedfileName[splittedfileName.length-1]
    avatar.mv(path.join(__dirname,"..", uploads, newFileName), async (err)=>{
      if(err){
        return next(new HttpError(error))
      }
      const updatedAvatar= await User.findByIdAndUpdate(req.user.id, {avatar: newFileName}, {new: true})
      if(!updatedAvatar){
        return next(new HttpError("Avatar couldn't be changed.", 422))
      }
      res.staus(200).json(updatedAvatar)
    })
  }catch(error){
    return next(new HttpError(error))
  }
}

//PATCH: api/users/edit-user   EDIT USER DETAILS
const editUser = async (req,res,next)=>{
  res.json("Edit user details")
}

//GET: api/users/
const getAuthors = async (req,res,next)=>{
  try{
    const authors= await User.find().select('-password');   //to not display password in json
    res.status(200).json(authors)
  }catch(error){
    return next(new HttpError(error))
  }
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}