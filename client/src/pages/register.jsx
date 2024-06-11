import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


const Register = ()=>{
  const [userData, setUserData]= useState({
    name:"", email:"",password:"",password2:""
  })

  const [error, setError]= useState("")
  const navigate= useNavigate()

  const changeInputHandler =(e)=>{
    setUserData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const registerUserCredentials = async(e)=>{
    e.preventDefault()
    setError("")
    try{
      const response = await axios.post(`http://localhost:5000/api/users/register`, userData)
      const newUser = await response.data
      console.log(newUser)
      if(!newUser){
        setError("Couldn't register user. Please try again.")
      }
      navigate('/')
    }catch(err){
      setError(err.response.data.message)
    }
  }

  return(
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form" onSubmit={registerUserCredentials}>
          {error && <p className="form_error-message">{error}</p>}
          <input type="text" placeholder="Full Name" name='name' value={userData.name} onChange={changeInputHandler} />
          <input type="email" placeholder="Email" name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInputHandler} />
          <input type="password" placeholder="Confirm Password" name='password2' value={userData.password2} onChange={changeInputHandler} />
          <button>Register</button>
        </form>
        <small>Already have an account? <Link to="/login">sign in</Link></small>
      </div>
    </section>
  )
}

export default Register