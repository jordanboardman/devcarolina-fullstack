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
    console.log(params)
    axios
      .post("http://localhost:3000/user.json", params)
      .then((response) => {
        console.log(response.data);
        // clears form
        event.target.reset();
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
            <label for="name">Name:</label>
            <br />
            <input label="Name" />
            <br />
            <label for="email">Email:</label>
            <br></br>
            <input label="Email" />
            <br />
            <label for="password">Password:</label>
            <br></br>
            <input label="Password" />
            <br />
            <label for="confirm">Confirm Password:</label>
            <br></br>
            <input label="Confirm Password" />
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
