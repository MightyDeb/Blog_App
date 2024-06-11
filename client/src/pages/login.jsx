import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/userContext" 

const Login = ()=>{
  const [userData, setUserData]= useState({
    email:"",password:""
  })
  const [error, setError]= useState("")
  const navigate= useNavigate()
  const {setCurrentUser}= useContext(UserContext)

  const changeInputHandler =(e)=>{
    setUserData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUserCredentials= async (e)=>{
    e.preventDefault()
    setError('')
    try{
      const response= await axios.post(`http://localhost:5000/api/users/login`, userData)
      const user= await response.data;
      setCurrentUser(user)
      navigate('/')
    }catch(err){
      setError(err.response.data.message)
    }
  }
  return(
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form register_form" onSubmit={loginUserCredentials}>
          {error && <p className="form_error-message">{error}</p>}
          
          <input type="email" placeholder="Email" name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInputHandler} />
          
          <button>Login</button>
        </form>
        <small>Don't have an account? <Link to="/register">sign up</Link></small>
      </div>
    </section>
  )
}

export default Login