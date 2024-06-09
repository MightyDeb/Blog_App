import React from "react";
import {Link} from "react-router-dom"
const Error = ()=>{
  return(
    <section className="error-page">
        <Link to="/" className="error-button">Go Back Home</Link>
        <h2 className="error-message">Page Not Found</h2>
    </section>
  )
}

export default Error