import React, { useState, setError } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import UserShow from "./UserShow";
import axios from "axios";

export function Login () {
const [errors, setErrors] = useState([]);

const handleSumbit = (event) => {
  console.log("in handleSubmit");
  event.preventDefault();
  setErrors([]);
  const params = new FormData(event.target);
  axios
  .post("http://localhost:3000/sessions.json", params)
  .then((response)=> {
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
    localStorage.setItem("jwt", response.data.jwt);
    localStorage.setItem("user_id", response.data.user_id);
    const user_id = window.localStorage.getItem(`user_id`)
    event.target.reset();
    event.preventDefault();
    window.location.href = "/feature1" //change this to hide a model, redirect to a specific page etc.
  })
  .catch ((error)=>{
    console.log(error.reponse)
    setError(["Invalid Email or Password"]);
  });
};



return (
  <div id="login">
    <h1> Login</h1>
    <ul>
      {errors.map((error)=> (
        <li key={error}> {error}</li>
      ))}
      </ul>
      <form onSubmit={handleSumbit}>
        <div>
          Email: <input name="email" type="email"/>
        </div>
        <div>
          Password: <input name="password" type="password"/>
        </div>
        <button type="submit">Login</button>
    </form>
 <br/>
 <br/>
 
 {/* user_id currently logged in: {user} */}
      {/* <UserShow user={user}/> */}
      #need to padd user to UserShow
  </div>
  );
}

export default Login;
