import React from "react";
import { useState } from "react";
import axios from "axios";

export function SignUp () {
 const [errors, setErrors] = useState([])


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
    console.log(error.response.data.errors);
    setErrors(error.response.data.errors)
  } )

}

  return(

<div>
  Signup
  {/* This shows the errors to user:  */}
  {errors.map(error => (
    <div> {error} </div>
  ))}
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