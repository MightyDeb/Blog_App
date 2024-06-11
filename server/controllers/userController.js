//POST: api/users/register   REGISTER
const registerUser = async (req,res)=>{
  res.json("Register User")
}
//POST: api/users/login   LOGIN
const loginUser = async (req,res)=>{
  res.json("Login User")
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