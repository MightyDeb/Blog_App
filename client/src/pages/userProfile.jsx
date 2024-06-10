import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../pics/profile-icon-design-free-vector.jpg"
import { FaEdit, FaCheck} from "react-icons/fa";

const UserProfile = ()=>{
  const [avatar, setAvatar]= useState(Avatar)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [currentPassword, setCurrentPassword]= useState('')
  const [newPassword, setNewPassword]= useState('')
  const [confirmNewPassword, setConfirmNewPassword]= useState('')
  return(
    <section className="profile">
      <div className="profile_container">
        <Link to={`/myposts/sdfsdf`} className="profile-btn" >My Posts</Link>
        <div className="profile_details">
          <img src={avatar} className="profile_avatar"/>
        </div>
        <form className="avatar_form">
          <input type="file" name="avatar" id="avatar" accept="png, jpg, jpeg" onChange={(e)=> setAvatar(e.target.files[0])}></input>
          <label htmlFor="avatar"><FaEdit /></label>
        </form>
        <button className="profile_avatar-btn">
          <FaCheck />
        </button>
      </div>
      <h1>Ernest Hamburger</h1>

      <form className="profile_form">
        <p className="form_error_msg">This is an error message</p>
        <input type="text" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e)=> setCurrentPassword(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} />
        <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e)=> setConfirmNewPassword(e.target.value)} />
        <button className="submit_btn">Update details</button>
      </form>
    </section>
  )
}

export default UserProfile