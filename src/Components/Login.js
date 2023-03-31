import React, { useState, setError } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import UserShow from "./UserShow";
import "../index.css";
import axios from "axios";
import { Box, Paper, Button } from "@mui/material";


export function Login() {
  const [errors, setErrors] = useState([]);


const handleSubmit = (event) => {
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

  <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "35vw",
            height: "35vh",
            position: "fixed",
            top: "25%",
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            backgroundColor: "#F1DBBF",
          }}
        >
          <form
            onSubmit={handleSubmit}
            margin="20px"
            direction="column"
            spacing={1}
          >
            <h3>Make a Difference</h3>
             Email: <input name="email" type="email" />
            <br />
            Password: <input name="password" type="password"/>
            <br />

            <Box display="flex">
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: "20px", width: "100px", marginTop: "10px" }}
              >
                Login
              </Button>
              {/* Signup */}
              {/* This shows the errors to user:  */}
              {errors.map((error) => (
                <Box> {error} </Box>
              ))}
            </Box>
          </form>
        </Paper>
      </Box>
  );
}

export default Login;
