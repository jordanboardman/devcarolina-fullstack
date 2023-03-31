import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Paper, Button } from "@mui/material";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    console.log("handleing submit...");
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    console.log(params)
    axios
      .post("http://localhost:3000/user.json", params)
      .then((response) => {
        console.log(response.data);
        // clears form
        event.target.reset();
        event.preventDefault();
        window.location.href = "/feature1" //change this to hide a model, redirect to a specific page etc.

      })
      .catch((error) => {
        console.log("consoling becasuse there is an error!");
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <>
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
            Name: <input name="name" type="name" />
            <br />
            Email: <input name="email" type="email" />
            <br />
            Password: <input name="password" type="password"/>
            <br />
            Confirm Password: <input name="password" type="password"/>
            <br />
            <Box display="flex">
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: "20px", width: "100px", marginTop: "10px" }}
              >
                Sign Up
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
    </>
  );
}

export default SignUp;
