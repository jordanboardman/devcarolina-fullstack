import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp () {

const handleSubmit = (event) => {
  console.log("handleing submit...")
  event.preventDefault();
  console.log(event.target);
  const params = new FormData(event.target)
  axios.post("http://localhost:3000/users.json", params).then(response => {
    console.log(response.data);
    // clears form
    event.target.reset();

  })
  .catch(error => {
    console.log("consoling becasuse there is an error!")
    console.log(error.response.data.errors)
  } )

}

  return(

<div>
  Signup
  <form onSubmit={handleSubmit} >
    <p>  Name: <input type="text" name="text"/> </p>
    <p>   Email: <input type="email" name="email"/></p>
    <p>  Password: <input type="password" name="password"/></p>
    <p>  Confirm Password: <input type="password" name="password_confirmation"/></p>
 <button type="submit"> Signup</button>

  </form>
</div>
  )

}

export default SignUp